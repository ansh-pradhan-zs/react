import "./App.css";

function App() {
  // function throttle(func, delay) { // ? using timeoutId
  //   let timeoutId;
  //   return () => {
  //     if (!timeoutId) {
  //       func(); // ? api call
  //       timeoutId = setTimeout(() => {
  //         timeoutId = null;
  //       }, delay);
  //     }
  //   };
  // }

  function throttle(func, delay) {
    // ? using locked variable
    let locked = false;
    return () => {
      if (!locked) {
        func(); // ? api call
        locked = true;
        setTimeout(() => {
          locked = false;
        }, delay);
      }
    };
  }

  return (
    <main className="m-4 flex flex-row items-center gap-5">
      <button
        className="bg-blue-500 px-5 py-1 rounded-md"
        onClick={throttle(() => {
          let timeClicked = new Date();
          console.log(timeClicked);
        }, 1000)}
      >
        Search
      </button>
    </main>
  );
}

export default App;
