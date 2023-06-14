

const SearchInput = ({ placeholder, type, value, onChange }) => {
  return (
    <div className='h-full w-full relative'>
      <input   
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="w-full px-5 py-3 outline-none border-none relative bg-neutral-200 rounded-md"
      />     
    </div>
  );
};

export default SearchInput;
