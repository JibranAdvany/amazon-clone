import Image from 'next/image';
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {
  const router = useRouter();
  const [session] = useSession();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 space-x-2 flex-col sm:flex-row">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>
        {/* Search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 transition duration-200 ease-out cursor-pointer hidden sm:flex items-center h-10 rounded-md flex-grow">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none"
            placeholder="Start your search"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="flex text-white gap-6 px-4 items-center">
          <div
            className="cursor-pointer hover:underline"
            onClick={!session ? signIn : signOut}
          >
            <p className="text-sm">
              {session ? `Hello, ${session.user.name}` : `Sign in`}
            </p>
            <p className="font-bold">Accounts &amp; Lists</p>
          </div>
          <div className="cursor-pointer">
            <p className="text-sm">Returns</p>
            <p className="font-bold">&amp; Orders</p>
          </div>
          <div
            className="relative flex items-center space-x-2 cursor-pointer"
            onClick={() => router.push('/checkout')}
          >
            <span className="sm:absolute sm:top-0 sm:right-10 block h-4 w-4 text-center text-xs rounded-full bg-yellow-400 text-black absolute top-0 -right-3">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-7" />
            <p className="hidden sm:block mt-3">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="flex cursor-pointer items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer">Prime Video</p>
        <p className="cursor-pointer">Amazon Business</p>
        <p className="cursor-pointer">Today's Deals</p>
        <p className="cursor-pointer hidden lg:block">Electronics</p>
        <p className="cursor-pointer hidden lg:block">Laptops</p>
        <p className="cursor-pointer hidden lg:block">Kitchen</p>
      </div>
    </header>
  );
};

export default Header;
