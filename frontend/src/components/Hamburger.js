import "./Hamburger.css";

function Hamburger() {
  return (
    <div className="Hamburger">
      <div
        className="container"
        OnClick={(x) => {
          x.classList.toggle("change");
        }}
      >
        <div className="bar_1"></div>
        <div className="bar_2"></div>
        <div className="bar_3"></div>
      </div>
    </div>
  );
}

export default Hamburger;
