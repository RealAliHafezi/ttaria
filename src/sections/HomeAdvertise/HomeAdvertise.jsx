import "./HomeAdvertise.css";
function HomeAdvertise(props) {
  return (
    <div className="HomeAdvertise">
      {props.images.length &&
        props.images.map((img, index) => (
          <div key={index} className="HomeAdvertise_imageBox">
            <img src={img} alt="Advertise Image" />
          </div>
        ))}
    </div>
  );
}

export default HomeAdvertise;
