import { MenuItem } from "../../components/MenuItem";
import "./accordion.css";

const menuItems = [
  {
    title: "HTML",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt, magnam laborum eligendi veniam ipsum?",
  },
  {
    title: "CSS",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt, magnam laborum eligendi veniam ipsum?",
  },
  {
    title: "JavaScript",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt, magnam laborum eligendi veniam ipsum?",
  },
];
export default function Accordion() {
  return (
    <div className="container">
      {menuItems.map((item, ind) => (
        <MenuItem key={ind} title={item.title} body={item.body} />
      ))}
    </div>
  );
}
