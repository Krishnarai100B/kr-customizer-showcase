import '../styles/Products.css';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <a href="#demo" className="customize-link">Customize It <span>→</span></a>
      </div>
    </article>
  );
}

export default ProductCard;
