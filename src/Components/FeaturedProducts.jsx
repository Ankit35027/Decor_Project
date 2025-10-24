import "./FeaturedProducts.css";

const products = [
  { id: 1, name: "Moroccan Light Set", price: "$49.99", img: "https://m.media-amazon.com/images/I/71qxvP8mMUL._AC_SL1500_.jpg" },
  { id: 2, name: "Vintage Lamp Shade", price: "$89.99", img: "https://m.media-amazon.com/images/I/81tCyVvHTvL._AC_SL1500_.jpg" },
  { id: 3, name: "Crystal Chandelier", price: "$199.99", img: "https://m.media-amazon.com/images/I/81u3sE6cSUL._AC_SL1500_.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section className="featured">
      <h2>Featured Lights</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
