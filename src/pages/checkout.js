import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotals } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client';

function Checkout() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotals);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          {/* Basket */}
          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className="text-3xl border-b pb-3">
              {items.length === 0
                ? 'Your Basket is empty'
                : `Your Shopping Basket`}
            </h1>
            {items.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        {items.length > 0 && (
          <div className="flex flex-col bg-white shadow-md p-10 whitespace-nowrap">
            {items.length > 0 && (
              <>
                <h2 className="font-bold">
                  Subtotal ({items.length}):
                  <span className="font-bold">
                    <Currency quantity={total} currency={'USD'} />
                  </span>{' '}
                  items
                </h2>
                <button
                  disabled={!session}
                  className="cursor-pointer bg-yellow-500 p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-yellow-500 active:from-yellow-500"
                >
                  {!session ? 'Signin to checkout' : 'Proceed to checkout'}
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
