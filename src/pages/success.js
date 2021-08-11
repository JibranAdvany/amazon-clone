import Header from './../components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function Success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae cupiditate dolore ipsa accusantium nulla tempore pariatur
            exercitationem magni fugiat? Magni praesentium sequi blanditiis
            eius. Laudantium iusto alias temporibus optio maxime. Mollitia dolor
            eius consequuntur consequatur deleniti cupiditate sint omnis tenetur
            vero, dicta natus ex. Accusamus reiciendis architecto eum quibusdam
            officiis, excepturi, provident dolorem aliquam aliquid nulla
            voluptatem quae commodi alias.
          </p>
          <button
            className="mt-auto cursor-pointer bg-yellow-500 p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-yellow-500 active:from-yellow-500 mt-5"
            onClick={() => router.push('/orders')}
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
