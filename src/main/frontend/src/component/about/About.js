const About = () => {
  return (
    <div className="w3-content" style={{ "max-width": "1200px" }}>
      {/* First Grid: Logo & About   */}
      <div className="w3-row">
        <div className="w3-half w3-container">
          <h1 className="w3-jumbo">Wayward</h1>
        </div>
        <div className="w3-half w3-container w3-xlarge w3-text-grey">
          <p className="">
            A place to organize your thoughts, find motivation, and keep track
            of progress.
          </p>
        </div>
      </div>

      {/* Second Grid: Resent   */}
      <div className="w3-panel w3-text-grey">
        <h4>MOST RECENT WORK:</h4>
      </div>
      <div className="w3-row">
        <div className="w3-half w3-container">
          <p className="w3-xlarge w3-text-grey">----------------------------</p>
          <p className="w3-xlarge w3-text-grey">
            Add functionality to show recent projects, images, names
          </p>
          <p className="w3-xlarge w3-text-grey">----------------------------</p>
        </div>
      </div>
    </div>
  );
};
export default About;
