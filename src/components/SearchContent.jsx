import { useState } from "react";
import SearchInput from "./Inputs/SearchInput";
import BodyContent from "./BodyContent";
import { RiSearchLine } from "react-icons/ri";
import { ClipLoader } from "react-spinners";

import axios from "axios";

const SearchContent = () => {
  const key = "c399bc8246a4bd9478faaef24aec169d";
  const [value, setValue] = useState("");
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}`
        )
        .then((response) => setGetData([response.data]));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setValue('')
  };

  return (
    <div className="gap-y-10 w-full flex flex-col relative">
      <form onSubmit={getWeather}>
        <SearchInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Search City"
        />
        <RiSearchLine
          onClick={getWeather}
          size={30}
          className="absolute top-2 right-2 text-neutral-400 cursor-pointer hover:opacity-75"
        />
      </form>
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <ClipLoader color="#ffff" size={70} />
        </div>
      ) : (
        getData.map((item, index) => <BodyContent key={index} data={item} />)
      )}      
    </div>
  );
};

export default SearchContent;
