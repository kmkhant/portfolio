import React from "react";

type LoaderProps = {
	leftBlock: React.RefObject<HTMLDivElement> | null;
	rightBlock: React.RefObject<HTMLDivElement> | null;
};

const Loader: React.FC<LoaderProps> = ({
	leftBlock,
	rightBlock,
}) => {
	return (
		<main className="relative w-full h-full">
			<div
				className="fixed hidden z-[1000] w-[50%] h-[100vh] bg-white"
				ref={leftBlock}
			></div>
			<div
				className="fixed hidden z-[1000] w-[50%] h-[100vh] bg-white"
				ref={rightBlock}
			></div>
		</main>
	);
};

export default Loader;
