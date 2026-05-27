import { Search } from 'lucide-react';
import { MapPinIcon } from 'lucide-react';
import Button from '../../../components/ui/Button';

function SearchInput() {
  return (
    <div className="absolute flex flex-col md:flex-row justify-between 
      md:w-[70%] w-[90%] gap-2 p-2 rounded-2xl ring-1 ring-gray-800
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

      <div className="flexcenter gap-2 justify-start">
        <MapPinIcon className='text-green-500' />
        <input
          type="text"
          placeholder="Pretoria Sunnyside"
          className="focus:outline-none w-full shrink min-w-0 text-sm"
        />
      </div>

      <div>
        <Button className="w-full" variant="primary" >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchInput;