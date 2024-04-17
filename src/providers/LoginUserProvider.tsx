import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { User } from '../types/api/user';

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
	loginUser: LoginUser | null;
	setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

// eslint-disable-next-line
export const LoginUserContext = createContext<LoginUserContextType>(
	{} as LoginUserContextType
);

// eslint-disable-next-line
export const LoginUserProvider = (props: { children: React.ReactNode }) => {
	const { children } = props;
	const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

	return (
		<LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
			{children}
		</LoginUserContext.Provider>
	);
};
