import Product from './Product';

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map(item => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={Math.random() * 6}
        />
      ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map(item => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={Math.random() * 6}
          />
        ))}
      </div>
      {products.slice(6, products.length).map(item => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={Math.random() * 6}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
