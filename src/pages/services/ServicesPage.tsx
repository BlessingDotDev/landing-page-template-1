import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Services from './Services';
import HeroSection from './HeroSection';
import Practice from './Practice';

function ServicesPage() {
  return (
    <>
      <title>Services</title>
      <Header />

      <main>
        <HeroSection />

        <section className="p-8">
          <Services />
        </section>
      </main>

      <Practice />

      <Footer />
    </>
  );
}

export default ServicesPage;