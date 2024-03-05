"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuthState = () => {
	return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({
		email: undefined,
		avatar: undefined,
		firebase_token: undefined,
		UUID: undefined,
	});

	useEffect(() => {
		const email = Cookies.get("email");
		const avatar = Cookies.get("avatar");
		const isAuthenticated = Cookies.get("isAuthenticated");
		const firebase_token = Cookies.get("firebase_token");
		const UUID = Cookies.get("studentId");

		setUser({ email, avatar, firebase_token, UUID });
		setIsAuthenticated(isAuthenticated);
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
