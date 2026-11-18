import ProductCard from './ProductCard';
import '../styles/Products.css';

function ProductSection({ category, index }) {
  return (
    <section className="product-section" id={index === 0 ? 'products' : undefined}>
      <div className="section-heading">
        <p className="eyebrow">EXPLORE THE COLLECTION</p>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
      </div>

      <div className="product-grid">
        {category.items.map((product, productIndex) => (
          <ProductCard key={`${product.name}-${productIndex}`} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
