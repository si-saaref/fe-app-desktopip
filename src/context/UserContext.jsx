import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import { registerUser } from '../services/api';
// import Cookies from 'js-cookie';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	const login = async (data) => {
		console.log(data);
		setUser('');
	};

	const register = async (data) => {
		try {
			const resp = await registerUser(data);

			if (resp.status !== 201) {
				toast.error(resp.message);
			} else {
				// toast.success(resp.message);
				toast.success('Please login to continue');
				setUser(resp.data);
				// setUser
			}
			return resp;
		} catch (error) {
			toast.error(error);
		}

		setUser('');
	};

	return <UserContext.Provider value={{ user, login, register }}>{children}</UserContext.Provider>;
}
