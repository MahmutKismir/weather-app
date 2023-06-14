

const Header  = ({title}) => {
     return ( 
          <div className="flex w-full justify-center items-center px-5 py-5 ">
               <h1 className="text-white font-semibold lg:text-6xl md:text-5xl sm:text-4xl "> {title} </h1>              
          </div>
      );
}

export default Header;