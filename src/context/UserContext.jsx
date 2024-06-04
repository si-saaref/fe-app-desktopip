import { createContext, useState } from 'react';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState();

	const login = async () => {
		setUser('');
	};

	const register = async () => {
		setUser('');
	};

	return <UserContext.Provider value={{ user, login, register }}>{children}</UserContext.Provider>;
}
