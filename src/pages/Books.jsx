import { Link } from "react-router-dom";

const Books = () => {
  return (
    <main>
      <div>Book</div> <Link to={"/book/12"}>Book 12</Link>
    </main>
  );
};

export default Books;
