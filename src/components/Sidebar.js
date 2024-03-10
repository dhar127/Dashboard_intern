// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Import CSS

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Courses</li>
        <li>Settings</li>
        <li>Messages</li>
        <li>Notifications</li>
        <li>Calendar</li>
        <li>Tasks</li>
        <li>Notes</li>
        <li>Reports</li>
        <li>Analytics</li>
        {/* Add more sidebar items */}
      </ul>
    </div>
  );
}

export default Sidebar;
