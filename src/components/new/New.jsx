import Cam from "./Cam";
import "./index.css";
import Pop from "./Pop";
const New = () => {
  return (
    <>
      <div className="con">
        <div className="home-con">
          <div className="img">
            <img src="fin.png" className="img" />
            <p className="glowing-text">Department of Computer Science</p>
          </div>
          <div>
            <p className="glowing-text ">
              Where Innovation Meets sliver Screen
            </p>
            <p className="glowing-text">26 February 2025</p>
          </div>
          <div className="img-con">
            <Cam />

            <p className="glowing-text ">
              Join us for a spectacular journey into technology,creativity,and
              innovation,all wrapped in the charm of Retro Cinema.
            </p>
            <Pop />
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
