import "./detailcard.css";

const DetailCard = ({ title, img, desc }) => {
  return (
    <div className="card">
      <img src={img} alt="person photo" />
      <div className="details">
        <span className="title">{title}</span>
        <div className="desc">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
