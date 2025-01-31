const Day14Throttling = () => {
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
    <div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-5">
        <span>Throttling Implementation</span>
        <button
          className="bg-blue-500 px-5 py-1 rounded-md text-white"
          onClick={throttle(() => {
            let timeClicked = new Date();
            console.log(timeClicked);
          }, 1000)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Day14Throttling;
