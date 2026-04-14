import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import { Page, Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('order');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onOrderClick={() => setCurrentPage('order')} />
            <FeaturedProducts onOrder={handleOrder} />
            <About />
            <Contact />
          </motion.div>
        );
      case 'menu':
        return (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Menu onOrder={handleOrder} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <About />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Contact />
          </motion.div>
        );
      case 'order':
        return (
          <motion.div
            key="order"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <OrderForm selectedProduct={selectedProduct} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
