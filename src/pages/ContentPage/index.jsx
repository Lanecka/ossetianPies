import Footer from '../../components/blocks/Footer';
import Header from '../../components/blocks/Header';
import Navigation from '../../components/blocks/Navigation';
import Products from '../../components/blocks/Products';

const ContentPage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Navigation />
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default ContentPage;