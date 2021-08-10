import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };

    // sending action to redux store
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-6 shadow-md rounded-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex items-center space-x-2">
        <StarIcon className="h-5 text-yellow-500" />
        <p className="font-bold">
          {rating < 0.5 ? 0 : rating > 5 ? 5.0 : rating.toFixed(1)}
        </p>
      </div>
      <p className="text-sm my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://links.papareact.com/fdw"
            alt="Prime logo"
            className="w-12"
          />
          <p className="text-sm text-gray-500">Free next day delivery</p>
        </div>
      )}
      <button
        onClick={addItemToBasket}
        className="mt-auto cursor-pointer bg-yellow-500 p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-yellow-500 active:from-yellow-500"
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
