import React from 'react';
import { IUserFull } from "../../types";
import UserItem from "./UsersItem/UserItem";

interface IProps {
	users: IUserFull[];
}

const Users: React.FC<IProps> = ({ users }) => {
	return (
		<div>
			{
				users.map((user: IUserFull) => {
					return <UserItem key={user.id} user={user} />
				})
			}
		</div>
	);
};

export default Users;