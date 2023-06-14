import Header from "./components/Header";
import SearchContent from "./components/SearchContent";
import "./App.css";


function App() {
  
  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-700">
      <div className="
      flex 
      flex-col 
      items-center 
      w-2/3 
      h-4/5 
      rounded-md 
      py-4 
      px-10 
      xl:bg-[url('/image/maidenstower.jpeg')] 
      bg-cover
      bg-center 
      bg-no-repeat 
      md:bg-[url('/image/tower.jpeg')] 
      sm:bg-[url('/image/tower.jpeg')]
      min 
      ">
        <Header title="Weather App" />
        <SearchContent />
      </div>
    </div>
  );
}

export default App;
