import React from "react";
import recommendationLetter from "../assets/MarwanLetterOfRec.pdf";

const referralsData = [
  {
    name: "Marwan Obeidat",
    title: "Software Engineering Manager",
    company: "Trimble",
    testimonial:
      "Bilal proved himself to be a dependable employee and a hard worker with solid problem-solving and technical skills. His responsibilities included the following: working with the product manager and the team on new software features, and implementing and applying designs using the fundamentals of software engineering and data structures. He demonstrated good skills in TypeScript, Vue.js, CSS, HTML, and Cypress test automation framework. Bilal is quality-focused, a good communicator and collaborator, and demonstrates the attention to detail needed in our field.",
    pdfLink: recommendationLetter,
  },
];

const Referrals = () => {
  return (
    <section
      id="referrals"
      style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <h2
          className="text-center"
          style={{ marginBottom: "40px", fontWeight: "bold" }}
        >
          Referrals from My Colleagues
        </h2>
        <div className="row justify-content-center">
          {" "}
          {}
          {referralsData.map((referral, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              style={{ marginBottom: "30px" }}
            >
              {" "}
              {/* Centered column */}
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{ fontStyle: "italic", fontSize: "16px" }}
                  >
                    "{referral.testimonial}"
                  </p>
                  <hr />
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {referral.name}
                  </h5>
                  <p className="card-subtitle mb-2 text-muted">
                    {referral.title}, {referral.company}
                  </p>
                  {/* Link to the full recommendation letter */}
                  <a
                    href={referral.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-3"
                  >
                    View Full Recommendation Letter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Referrals;
