import { useEffect, useState } from "react";

const SearchInput = () => {
  //   const [searchText, setSearchText] = useState("");
  //   const [logState, setLogState] = useState("");

  //   useEffect(() => {
  //     const timeoutId = setTimeout(() => {
  //       setLogState(searchText);
  //     }, 1000);

  //     return () => clearTimeout(timeoutId);
  //   }, [searchText]);

  //   useEffect(() => {
  //     console.log(logState);
  //   }, [logState]);

  function debounce() {
    let timeoutId;

    return (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log(e.target.value);
      }, 1000);
    };
  }

  return (
    <div>
      <input type="text" className="search-input" onChange={debounce()} />
    </div>
  );
};

export default SearchInput;
