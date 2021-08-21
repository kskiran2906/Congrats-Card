const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="row">
      <div className="card col-xs-10 col-sm-10 col-md-7 col-lg-7 col-xl-7">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="img-profile"
        />
        <h1 className="profile-heading">Kiran V</h1>
        <p className="profile-paragraph">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="img-watch"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
