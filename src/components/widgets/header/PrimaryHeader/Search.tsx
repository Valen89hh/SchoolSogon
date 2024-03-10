import SearchIcon from "@mui/icons-material/Search";
import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className="w-[30%] max-w-sm
    hidden
    xs:flex items-center
    overflow-hidden space-x-2
    h-8 px-2
    border-solid border-secondary-light 
    border-[1px] rounded-full
    ">
      <Image
      src="/icons/Search.svg"
      alt='User'
      height={15}
      width={15}
    />
      <input
      className="text-secondary-light text-[12px] flex-1 min-w-0 outline-none"
      placeholder="Search"
       type="text" 
       name="" 
       id="" 
       />
    </div>
  );
};

export default SearchBar;
