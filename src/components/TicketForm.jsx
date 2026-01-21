import React, { useState } from "react";
import "../index.css";
import GenerateTicket from "./GenerateTicket";

const TicketForm = ({ onGenerateTicket }) => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [avatar, setAvatar] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    onGenerateTicket({
      firstName,
      emailAddress,
      gitHub,
      avatar,
    });
  }

  return (
    <section className="hero">
      <div className="image-container ">
        {/* <picture className='background'>
        <source srcset="/images/background-desktop.png" media='(min-width: 768px)' />
        <source srcset="/images/background-mobile.png" media='(max-width: 767px)' />
        <img src="/images/background-desktop.png" alt="" className='background'/>
      </picture> */}
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year’s biggest coding conference.</p>

        <form action="" className="form" onSubmit={handleForm}>
          <label htmlFor="avatar" className="upload-box">
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              hidden
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <span>
              {avatar ? avatar.name : "Drag and drop or click to upload"}
            </span>
          </label>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>

          {/* GitHub Username */}
          <div className="form-group">
            <label htmlFor="github">GitHub Username</label>
            <input
              type="text"
              id="github"
              name="github"
              placeholder="@yourusername"
              value={gitHub}
              onChange={(e) => setGitHub(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Generate My Ticket
          </button>
          {/* {ticket && <GenerateTicket ticket={ticket} />} */}
        </form>
      </div>
    </section>
  );
};

export default TicketForm;
