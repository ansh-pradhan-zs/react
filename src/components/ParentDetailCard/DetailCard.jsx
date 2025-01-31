import "./detailcard.css";

const DetailCard = ({ title, img, desc }) => {
  return (
    <div className="card2">
      <img src={img} alt="person photo" />
      <div className="details2">
        <span className="title2">{title}</span>
        <div className="desc2">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
