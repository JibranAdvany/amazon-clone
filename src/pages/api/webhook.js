import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// Secure a connection to firebase
const serviceAccount = require('./../../../permissions.json');
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Connect to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async session => {
  // console.log('fulfilling order', session);

  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log('SUCCESS: Order has been added' + session.id);
    });
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    // Verify the event came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      console.log(error);
      return res.status(400).send('Webhook error' + error.message);
    }

    // Handle checkout session completer
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch(err => res.status(400).send('Webhook error', err.message));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
