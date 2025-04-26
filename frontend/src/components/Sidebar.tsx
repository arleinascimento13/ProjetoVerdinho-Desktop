// src/components/Sidebar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
	return (
		<div className="bg-dark text-white vh-100 p-3" style={{ width: "250px", position: "fixed" }}>
			<h4 className="text-center">Pet Shop Management</h4>
			<div className="text-center mb-4">
				<img src="https://via.placeholder.com/60" className="rounded-circle" alt="User" />
				<p>Example User</p>
			</div>
			<ul className="nav flex-column">
				<li className="nav-item">
					<Link to="home" className="nav-link text-white">
						🐾 Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<Link to="pet" className="nav-link text-white">
						🐶 Pet
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
