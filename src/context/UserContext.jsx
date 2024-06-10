/* eslint-disable no-undef */
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { loginUser, registerUser } from '../services/api';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const tokenUser = Cookies.get('tokenUser') ?? '';
		if (tokenUser) {
			const token = Buffer.from(tokenUser, 'base64').toString('');
			const userData = jwtDecode(token);
			setUser(userData.user);
		}
	}, []);

	const login = async (data) => {
		try {
			const resp = await loginUser(data);
			console.log(resp);

			if (resp.status !== 200) {
				toast.error(resp.message);
			} else {
				const { token } = resp.data;

				const encryptToken = token ? Buffer.from(token).toString('base64') : '';
				Cookies.set('tokenUser', encryptToken);

				const dataUser = jwtDecode(token);
				setUser(dataUser.user);
			}
			return resp;
		} catch (error) {
			toast.error(error.message);
		}
	};

	const register = async (data) => {
		try {
			const resp = await registerUser(data);

			if (resp.status !== 201) {
				toast.error(resp.message);
			} else {
				// toast.success(resp.message);
				toast.success('Please login to continue');
				// setUser(resp.data);
				// setUser
			}
			return resp;
		} catch (error) {
			toast.error(error.message);
		}

		setUser('');
	};

	const logout = () => {
		Cookies.remove('tokenUser');
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, register, logout }}>
			{children}
		</UserContext.Provider>
	);
}
