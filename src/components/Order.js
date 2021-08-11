import Currency from 'react-currency-formatter';
import moment from 'moment';

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-sm">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
        </div>

        <div>
          <p className="text-sm font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="USD" /> - Next Data Delivery{' '}
            <Currency quantity={amountShipping} currency="USD" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-sm whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map(img => (
            <img src={img} className="h-20 object-contain sm:h-32" key={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
