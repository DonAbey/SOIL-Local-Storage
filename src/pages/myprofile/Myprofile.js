import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { validatePassword } from '../../data/verify';

function MyProfile(props){

    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', password: '', dateJoined:'' });
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (activeUser) {
            setUser(activeUser);
        } else {
            // Redirect or handle the absence of an active user
            //navigate('/signin');
        }
    }, [navigate]);

    const handleSave = (e) => {
        e.preventDefault();

        //validating the new password
        if (!validatePassword(newPassword)) {
            setError('New password does not meet requirements.');
            return;
        }

        //confirming the new password and confirm password is same
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        //hashing new password and storing back in the local storage
        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(u => u.email === user.email ? { ...u, name: user.name, password: hashedPassword } : u);

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('activeUser', JSON.stringify({ ...user, password: hashedPassword }));
        
        //changing the state of isUpdated
        setIsUpdated(true);
        // Redirect or show a success message
        setTimeout( () => {
            setIsUpdated(false);
        }, 2000);
        alert('Profile updated successfully!');
    };

    return (
        <div className="container mt-3">
            <h2>My Profile</h2>
            <p>Joined on {user.dateJoined}</p>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className="form-control" 
                    id="email" value={user.email} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className="form-control" 
                    id="name" value={user.name} 
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="newPassword" value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="my-3">
                <button type="submit" className="btn btn-primary mr-3">Save Changes</button>
                <button type="submit" className="btn btn-primary ms-3" onClick={() => navigate("/")}>Back</button>
        
                </div>
            </form>
            {isUpdated &&(
                    <div className="text-center">
                        <p>Profile updated successfully!</p>
                    </div>
                )}
        </div>
    );
}
export default MyProfile;