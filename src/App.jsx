import Header from "./components/Header";
import SearchContent from "./components/SearchContent";
import "./App.css";


function App() {
  
  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-300">
      <div className="flex flex-col items-center w-2/3 h-4/5 rounded-md py-1 px-8 bg-[url('/image/maidenstower.jpeg')] bg-cover bg-no-repeat ">
        <Header title="Weather App" />
        <SearchContent />
      </div>
    </div>
  );
}

export default App;
