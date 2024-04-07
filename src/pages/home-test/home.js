import React from "react";
import { useNavigate } from "react-router-dom"; 

function Home() {
    const navigate = useNavigate();
    // Getting the active user's data
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));

    const handleLogout = () => {
        //removing active user when logging out
        localStorage.removeItem('activeUser'); // Remove the active user's data
        navigate("/signin");
    };

    return (
        <div className="text-center">
            {activeUser && <h4><strong>Hello, {activeUser.name}!</strong></h4>}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}
export default Home;