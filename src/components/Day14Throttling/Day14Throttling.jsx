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
    <button
      className="bg-blue-500 px-5 py-1 rounded-md"
      onClick={throttle(() => {
        let timeClicked = new Date();
        console.log(timeClicked);
      }, 1000)}
    >
      Search
    </button>
  );
};

export default Day14Throttling;
