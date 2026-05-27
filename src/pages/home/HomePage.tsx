import Header from '../../components/layout/Header';
import SearchInput from './SearchInput';
import Tasks from './Tasks';
import Footer from '../../components/layout/Footer';

function HomePage() {
  return (
    <>
      <title>Vision Works| Find Your Task</title>
      <Header />

      <main className=" min-h-screen p-8">
        <section>
          <h1 className="text-center text-3xl my-12 tracking-wide">
            Find Help for home tasks
          </h1>
          
          <SearchInput />
          <Tasks />
          
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;