import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoThunderstormOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const BodyContent = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
      <h1 className="lg:text-6xl md:text-5xl sm:text-4xl  font-semibold text-white">
        {data.name}
      </h1>
      <span className="lg:text-4xl md:text-xl sm:text-lg font-semibold text-white">
        {data.weather[0].main} & {data.weather[0].description}{" "}
      </span>
      <span className="lg:text-3xl md:text-xl sm:text-lg font-semibold text-white">
        Humidity: % {data.main.humidity}
      </span>
      <span className="lg:text-3xl md:text-xl sm:text-lg font-semibold text-white">
        Temp: {Math.floor(data.main.temp / 10)} C°
      </span>
      {data.weather[0].main === "Rain" && (
        <TiWeatherDownpour size={100} className="text-neutral-100 opacity-80" />
      )}
      {data.weather[0].main === "Clouds" && (
        <TiWeatherCloudy size={100} className="text-white opacity-80" />
      )}
      {data.weather[0].icon === "03d" && (
        <TiWeatherPartlySunny size={100} className="text-white opacity-80" />
      )}
      {data.weather[0].icon === "11d" && (
        <IoThunderstormOutline size={100} className="text-white opacity-80" />
      )}
      {data.weather[0].main === "Clear" && (
        <TiWeatherSunny size={100} className="text-white opacity-80" />
      )}
      {data.weather[0].icon === "50d" && (
        <TiWeatherWindyCloudy size={100} className="text-white opacity-80" />
      )}
      {data.weather[0].icon === "09d" && (
        <TiWeatherDownpour size={100} className="text-white opacity-80" />
      )}
    </div>
  );
};

export default BodyContent;
