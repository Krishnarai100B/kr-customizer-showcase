import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {products.map((category, index) => (
          <ProductSection key={category.title} category={category} index={index} />
        ))}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
