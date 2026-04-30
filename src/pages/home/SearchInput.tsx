import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchInput() {
  return (
    <div className='flexcenter'>
      <input
        type="text"
        placeholder="What do you need help with?"
        className="w-full max-w-2xl h-12 rounded-bl-xl 
          rounded-tl-xl p-4 text-sm bg-white/10 border
        border-white/20 focus:outline-none focus:ring-1 
        focus:ring-green-900 transition-all duration-300"
      />
      <button className="flexcenter cursor-pointer bg-green-900 
      h-12 w-12 rounded-br-xl rounded-tr-xl ring-green-900 ring-1">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export default SearchInput;