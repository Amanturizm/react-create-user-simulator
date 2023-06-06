import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { IUser, IUserFull } from "../types";

interface IProps {
	onSubmitHandler: (newUser: IUserFull) => void;
}

const UserForm: React.FC<IProps> = ({ onSubmitHandler }) => {

	const [user, setUser] = useState<IUser>({
		name: '',
		email: '',
		isActive: '',
		role: 'user'
	});

	const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const addUser = (e: React.FormEvent): void => {
		e.preventDefault();
		onSubmitHandler({
			...user,
			isActive: user.isActive === 'yes' ? true : false,
			id: nanoid()
		});
	};

	return (
		<form onSubmit={addUser} className="w-25">
			<h5>Add new user: </h5>
			<div className="form-group mb-2">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					className="form-control"
					value={user.name}
					onChange={changeUser}
				/>
			</div>

			<div className="form-group mb-2">
				<label htmlFor="email">Email</label>
				<input
					name="email"
					id="email"
					className="form-control"
					value={user.email}
					onChange={changeUser}
				/>
			</div>

			<div className="form-group mb-2">
				<label htmlFor="imageUrl" className="d-block">Active?</label>
				<div className="d-flex gap-3 mx-5">
					<div>
						Yes
						<input
							type="radio"
							name="isActive"
							className="form-check w-75"
							value="yes"
							onChange={changeUser}
						/>
					</div>
					<div>
						No
						<input
							type="radio"
							name="isActive"
							className="form-check w-75"
							value="no"
							onChange={changeUser}
						/>
					</div>
				</div>
			</div>

			<div className="form-group mb-3">
				<label htmlFor="role">Select role</label>
				<select name="role" id="role" className="form-select" value={user.role} onChange={changeUser}>
					<option value="user">user</option>
					<option value="editor">editor</option>
					<option value="admin">admin</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">Create</button>
		</form>
	);
};

export default UserForm;