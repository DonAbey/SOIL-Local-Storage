import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./adminStyle.css";

function AemAdmin() {
  const [ticketData, setTicketData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-2-1'); // Replace with actual cloud function URL
        const data = await response.json();
        setTicketData(data.tickets); 
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTicketData();
    const interval = setInterval(fetchTicketData, 3000); // Poll every 30 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeTicketDetail = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <h1>Admin Dashboard</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin/tickets">Manage Tickets</Link>
          </li>
          <li>
            <Link to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <div className="admin-main-content">
        <div className="ticket-table-container">
          <h2>Support Tickets</h2>
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.length > 0 ? (
                ticketData.map((ticket) => (
                  <tr key={ticket.ticket_id}>
                    <td>{ticket.ticket_id}</td>
                    <td>{ticket.user_name}</td>
                    <td>{ticket.user_email}</td>
                    <td>{ticket.issue}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.created_at}</td>
                    <td>
                      <button
                        className="view-ticket-btn"
                        onClick={() => handleTicketClick(ticket)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No tickets available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedTicket && (
          <div className="ticket-detail-modal">
            <div className="ticket-detail-content">
              <h3>Ticket Details</h3>
              <p>
                <strong>Ticket ID:</strong> {selectedTicket.ticket_id}
              </p>
              <p>
                <strong>User Name:</strong> {selectedTicket.user_name}
              </p>
              <p>
                <strong>Email:</strong> {selectedTicket.user_email}
              </p>
              <p>
                <strong>Issue:</strong> {selectedTicket.issue}
              </p>
              <p>
                <strong>Status:</strong> {selectedTicket.status}
              </p>
              <p>
                <strong>Created At:</strong> {selectedTicket.created_at}
              </p>
              <button className="close-btn" onClick={closeTicketDetail}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AemAdmin;
