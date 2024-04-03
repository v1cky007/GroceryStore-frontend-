import React, { useState } from 'react';
import './AdminListUser.css';
import Sidebar from '../Sidebar';

const ListUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'vicky', email: 'vicky@outlook.com' },
    { id: 2, username: 'User2', email: 'user2@yahoo.com' },
  ]);

  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      username: newUsername,
      email: newEmail,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    handleCloseAddUserDialog();
  };

  const handleClickAddUser = () => {
    setOpenAddUserDialog(true);
  };

  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
    setNewUsername('');
    setNewEmail('');
  };

  return (
    <div className="AdminListcontainer">
    <Sidebar/>
      <h4 className='AdminListHHeading'>List of Users</h4>
      <table className="AdminListTable">
      <thead>
      <tr className='AdminListHeading'>
      <th>ID</th>
      <th>Username</th>
      <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user) => (
        <tr className='AdminListRow' key={user.id}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        </tr>
        ))}
        </tbody>
        </table>
        <button className="AdminListsubmit" onClick={handleClickAddUser}>
          Add User
        </button>
        
      {/* Add User Dialog */}
      {openAddUserDialog && (
        <div className="AdminListcontainer">
          <h2 className="AdminListtext">Add User</h2>
          <div className="AdminListinputs">
            <div className="AdminListinput">
              <label className="AdminListtext">Username:</label>
              <input
                type="text"
                
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="AdminListinput">
              <label className="AdminListtext">Email:</label>
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="AdminListsubmit-container">
            <button className="AdminListsubmit" onClick={handleCloseAddUserDialog}>
              Cancel
            </button>
            <button className="AdminListsubmit" onClick={handleAddUser}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListUsers;
