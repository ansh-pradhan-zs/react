import "./App.css";
import Day14Throttling from "./components/Day14Throttling/Day14Throttling";

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

  return (
    <main>
      <Day14Throttling />
    </main>
  );
}

export default App;
