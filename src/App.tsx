import React, { useState } from 'react';
import UserForm from "./components/UserForm";
import Users from "./components/Users/Users";
import { IUserFull } from "./types";

const App = () => {
	const [users, setUsers] = useState<IUserFull[]>([]);

	const addUser = (newUser: IUserFull): void => {
		setUsers(prevState => [...prevState, { ...newUser }]);
	};

	return (
		<div className="d-flex justify-content-center gap-5">
			<UserForm onSubmitHandler={addUser}/>
			<Users users={users}/>
		</div>
	);
};

export default App;
