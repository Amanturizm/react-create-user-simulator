import React from 'react';

const UserForm = () => {
	return (

		<form className="container w-25">
			<div className="form-group mb-2">
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" className="form-control"/>
			</div>

			<div className="form-group mb-2">
				<label htmlFor="email">Email</label>
				<textarea name="email" id="email" className="form-control"></textarea>
			</div>

			<div className="form-group mb-2">
				<label htmlFor="imageUrl" className="d-block">Active?</label>
				<div className="d-flex gap-3 mx-5">
					<div>
						<label htmlFor="isActiveYes">Yes</label>
						<input type="radio" name="isActive" className="form-check w-75"/>
					</div>
					<div>
						<label htmlFor="isActiveNo">No</label>
						<input type="radio" name="isActive" className="form-check w-75"/>
					</div>
				</div>
			</div>

			<div className="form-group mb-3">
				<label htmlFor="role">Select role</label>
				<select name="role" id="role" className="form-select">
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