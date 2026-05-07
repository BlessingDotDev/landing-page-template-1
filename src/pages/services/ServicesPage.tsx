import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './HeroSection';
import Practice from './Practice';

function ServicesPage() {
  return (
    <>
      <title>Services</title>
      <Header />

      <main>
        <HeroSection />
      </main>

      <Practice />

      <Footer />
    </>
  );
}

export default ServicesPage;