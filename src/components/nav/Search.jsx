import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../DarkMode/ThemeContext";
import { MdClose } from "react-icons/md";

const Search = ({ keyword, setKeyword, handleSearch }) => {
  const { isDarkMode, isSmallScreen, RemoveToggleMenu } = useTheme();

  const handleChange = (e) => {
    setKeyword(e.target.value);
    RemoveToggleMenu();
  };
  const clearSearch = () => {
    setKeyword("");
  };

  return (
    <form
      onSubmit={handleSearch}
      onClick={RemoveToggleMenu}
      className={`py-4 px-2 pr-1  flex gap-2 items-center ${
        isSmallScreen ? "w-full" : "w-3/5"
      } relative pb-3 appearance-none focus:outline-none border-none`}
    >
      <input
        type="text"
        spellCheck
        value={keyword}
        onChange={handleChange}
        className={`p-2 pl-[40px] px-5 rounded-3xl w-full ${
          isDarkMode ? "searchDarkMode" : "bg-gray-200 text-black"
        } cursor-text appearance-none focus:outline-none border-none  `}
      />
      <button type="submit" className=" p-1 absolute top-6 left-4">
        <FaSearch className=" " />
      </button>
      <p
        onClick={clearSearch}
        className=" p-1 cursor-pointer absolute top-6 right-3"
      >
        {/* <FaSearch className=' ' /> */}
        <MdClose />
      </p>
    </form>
  );
};

export default Search;
