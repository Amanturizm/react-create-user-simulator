import React from 'react';
import { IUserFull } from "../../../types";

interface IProps {
	user: IUserFull;
}

const UserItem: React.FC<IProps> = ({ user }) => {

	return (
		<div className="card mb-2">
			<div className="row">
				<div className="card-body">
					<h5 className="card-title">{user.name}</h5>
					<p className="card-text small">{user.email}</p>
					<p className={`card-text ${user.isActive ? 'text-success' : 'text-danger'}`}>{user.isActive ? 'active' : 'inactive'}</p>
					<p className="card-text">{user.role}</p>
				</div>
			</div>
		</div>
	);
};

export default UserItem;