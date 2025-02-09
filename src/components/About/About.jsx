import "./About.css"; // External CSS file

const About = () => {
  const teamData = {
    TeamA: [
      {
        name: "John Doe",
        role: "Event Coordinator",
        image: "https://via.placeholder.com/150/ff7f50/fff?text=John",
      },
      {
        name: "Alice Brown",
        role: "Creative Director",
        image: "https://via.placeholder.com/150/ff6347/fff?text=Alice",
      },
    ],
    TeamB: [
      {
        name: "Jane Smith",
        role: "Technical Head",
        image: "https://via.placeholder.com/150/1e90ff/fff?text=Jane",
      },
      {
        name: "David Lee",
        role: "Software Engineer",
        image: "https://via.placeholder.com/150/4169e1/fff?text=David",
      },
    ],
    TeamC: [
      {
        name: "Mike Johnson",
        role: "Logistics Manager",
        image: "https://via.placeholder.com/150/32cd32/fff?text=Mike",
      },
      {
        name: "Sara Parker",
        role: "Operations Lead",
        image: "https://via.placeholder.com/150/3cb371/fff?text=Sara",
      },
    ],
  };
  return (
    <div className="container-fluid our-team-container py-5 bg-dark text-white min-vh-100 con">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Meet Our Team
      </h2>
      <div className="container">
        {Object.entries(teamData).map(([teamName, members]) => (
          <div className="team-section text-center" key={teamName}>
            <h3 className="my-4 neon-text default-cursor">{teamName}</h3>
            <div className="row justify-content-center">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="col-11 col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="team-card card mb-4 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-img-top team-img"
                    />
                    <div className="card-body">
                      <h5 className="card-title team-name">{member.name}</h5>
                      <p className="card-text team-role">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
