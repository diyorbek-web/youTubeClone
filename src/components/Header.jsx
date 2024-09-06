import { useState } from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = ({ handleSidebar, setQuery, query }) => {
  const [inputValue, setInputValue] = useState(query);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      console.log("Qidiruv so‘rovi:", inputValue);
      setQuery(inputValue); // qidiruv so'rovini yangilash
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md">
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <div
            onClick={handleSidebar}
            className="cursor-pointer p-2 rounded-full hover:bg-[#E6E6E6]"
          >
            <p className="w-6 h-1 bg-[#030303] mb-1"></p>
            <p className="w-6 h-1 bg-[#030303] mb-1"></p>
            <p className="w-6 h-1 bg-[#030303]"></p>
          </div>
          <div onClick={handleRefresh} className="flex cursor-pointer ml-4">
            <FaYoutube color="#FF0000" className="text-2xl mt-1" />
            <p className="font-semibold text-xl ml-2">YouTube</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-full bg-white shadow-md p-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Qidiruv..."
            className="w-96 flex-grow px-4 border-none rounded-full outline-none"
          />
          <button
            onClick={handleSearch}
            className="p-2 ml-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaSearch className="text-gray-600" />
          </button>
        </div>
        <div className="mt-3">
          <MdOutlineAccountCircle className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
