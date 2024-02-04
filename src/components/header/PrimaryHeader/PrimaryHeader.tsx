import Image from "next/image";
import SearchBar from "./Search";
import Actions from "./Actions";

const PrimaryHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <Image 
        src="/logo.svg" 
        alt="Img School" 
        width={100}
        height={60}
        />

      <SearchBar />

      <Actions />
    </div>
  );
};

export default PrimaryHeader;
