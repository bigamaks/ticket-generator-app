import React, { useEffect, useState } from "react";
// import "./ticket.css";
import "../ticket.css";

const GenerateTicket = ({ ticket, onReset }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (!ticket.avatar) return;

    // If it's a File (from input)
    if (ticket.avatar instanceof File) {
      const url = URL.createObjectURL(ticket.avatar);
      setAvatarUrl(url);
      return () => URL.revokeObjectURL(url);
    }

    // If it's a string (from localStorage)
    if (typeof ticket.avatar === "string") {
      setAvatarUrl(ticket.avatar);
    }
  }, [ticket.avatar]);

  return (
    <main className="ticket-page">
      <div className="ticket-container">
        {/* Header */}
        <header className="ticket-header">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span>Coding Conf</span>
          </div>

          <h1>
            Congrats, <span>{ticket.firstName}</span>! <br />
            Your ticket is ready.
          </h1>

          <p>
            We’ve emailed your ticket to{" "}
            <span className="highlight">{ticket.emailAddress}</span> and will
            send updates in the run up to the event.
          </p>
        </header>

        {/* Ticket Card */}
        <section className="ticket-card">
          <div className="ticket-left">
            <div className="ticket-logo">
              <span className="logo-icon">✦</span>
              <span>Coding Conf</span>
            </div>

            <p className="ticket-date">Jan 31, 2025 / Austin, TX</p>

            <div className="ticket-user">
              {avatarUrl && <img src={avatarUrl} alt="Avatar" />}
              <div>
                <h3>{ticket.firstName}</h3>
                <p>@{ticket.gitHub}</p>
              </div>
            </div>
          </div>

          <div className="ticket-divider" />

          <div className="ticket-id">
            <p>#60904</p>
          </div>
        </section>
          <button onClick={onReset} className="reset-btn">
        Create another ticket
      </button>
      </div>
    
    </main>
  );
};

export default GenerateTicket;
