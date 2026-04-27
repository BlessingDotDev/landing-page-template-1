import Header from '../../components/Header';

function HomePage() {
  return (
    <>
      <Header />

      <main className="p-6">
        <section>
          <h1 className="text-center text-3xl my-12 tracking-wide">
            Find Help for home tasks
          </h1>

          <div className='flex items-center justify-center'>
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full max-w-2xl h-12 rounded-bl-xl rounded-tl-xl p-4  text-sm bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-green-900 transition-all duration-300"
            />
            <button className="bg-green-900 h-12 w-12 rounded-br-xl rounded-tr-xl ">
hello
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;