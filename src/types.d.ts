export interface IUser {
	name: string;
	email: string;
	isActive: string;
	role: string;
}

export interface IUserFull extends IUser {
	id: string;
	isActive: boolean;
}