import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import Practice from './components/Practice';
import SideBar from './components/sidebar/SideBar';
import MainBar from './components/MainBar';
import RightBar from './components/RightBar';

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

        <section className="p-8 grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] m gap-8">
          <SideBar />
          <MainBar />
          <RightBar />
        </section>
      </main>

      <Practice />

      <Footer />
    </>
  );
}

export default ServicesPage;