import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import Practice from './components/Practice';
import SideBar from './components/sidebar/SideBar';
import MainBar from './components/mainbar/MainBar';
import RightBar from './components/rightbar/RightBar';

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

        <section className="p-8 grid grid-cols-1 
          lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[2fr_1fr] gap-24 md:gap-6">
          <SideBar />
          <MainBar />
          <RightBar />
        </section>
      </main>

      {
        /*
        <Practice />
        */
      }

      <Footer />
    </>
  );
}

export default ServicesPage;