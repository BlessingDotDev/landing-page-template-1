import Header from '../../components/Header';
import SearchInput from './SearchInput';

function HomePage() {
  return (
    <>
      <Header />

      <main className="p-6">
        <section>
          <h1 className="text-center text-3xl my-12 tracking-wide">
            Find Help for home tasks
          </h1>

          <SearchInput />
        </section>
      </main>
    </>
  );
}

export default HomePage;