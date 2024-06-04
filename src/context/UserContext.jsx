import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	const login = async (data) => {
		console.log(data);
		setUser('');
	};

	const register = async (data) => {
		console.log(data);
		setUser('');
	};

	return <UserContext.Provider value={{ user, login, register }}>{children}</UserContext.Provider>;
}
