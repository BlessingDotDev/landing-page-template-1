import { Search } from 'lucide-react';
import { MapPinIcon } from 'lucide-react';

function SearchInput() {
  return (
    <div className="absolute flex justify-between 
      md:w-[70%] w-[90%] p-2 rounded-2xl ring-1 ring-gray-600
       bg-black -bottom-[25px] md:-bottom-[40px]"
    >
      <div className="flexcenter gap-2">
        <Search />
        <input 
          type="text"
          placeholder="What service do you want?"
          className="focus:outline-none w-full shrink min-w-0 text-sm"
        />
      </div>

      <div className="flexcenter gap-2 hidden md:flex">
        <MapPinIcon className='text-green-500'/>
        <h4 className="">Pretoria, Sunnyside</h4>
      </div>

      <div>
        <button className="text-sm text-white leading-normal bg-green-600
           px-8 py-2 rounded-lg cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;