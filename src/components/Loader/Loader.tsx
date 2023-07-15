import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<Triangle
				height="80"
				width="80"
				color="#000000"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</div>
	);
};

export default Loader;
