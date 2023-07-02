// prettier-ignore
"use client";

import React, {
	useState,
	createContext,
	ReactNode,
} from "react";

type TransitionContextProps = {
	background: string;
	setBackground: React.Dispatch<
		React.SetStateAction<string>
	>;
	isFirstTime: boolean;
	setIsFirstTime:
		| React.Dispatch<React.SetStateAction<boolean>>
		| (() => void);
};

type TransitionProps = {
	children: ReactNode;
};

const TransitionContext =
	createContext<TransitionContextProps | null>(null);

const TransitionProvider = ({
	children,
}: TransitionProps) => {
	const [isFirstTime, setIsFirstTime] =
		useState<boolean>(true);
	const [background, setBackground] = useState("black");

	return (
		<TransitionContext.Provider
			value={{
				background,
				setBackground,
				isFirstTime,
				setIsFirstTime,
			}}
		>
			{children}
		</TransitionContext.Provider>
	);
};

export { TransitionContext, TransitionProvider };
