"use client";

import {
	useScroll,
	useTransform,
	useSpring,
	motion,
} from "framer-motion";
import {
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from "react";

type SmoothScrollProps = {
	children: React.ReactNode;
};

export const SmoothScroll: React.FC<SmoothScrollProps> = ({
	children,
}) => {
	// scroll container
	const scrollRef = useRef<HTMLDivElement>(null);

	// page scrollable height based on content length
	const [pageHeight, setPageHeight] = useState(0);

	// update scrollable height when browser is resizing
	const resizePageHeight = useCallback((entries: any) => {
		for (let entry of entries) {
			setPageHeight(entry.contentRect.height);
		}
	}, []);

	// observe when broswer is resizing
	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver(
			(entries: any) => resizePageHeight(entries)
		);

		scrollRef.current &&
			resizeObserver.observe(scrollRef.current);

		return () => resizeObserver.disconnect();
	}, [scrollRef, resizePageHeight]);

	const { scrollY } = useScroll();
	const transform = useTransform(
		scrollY,
		[0, pageHeight],
		[0, -pageHeight]
	);
	const physics = {
		damping: 15,
		mass: 0.27,
		stiffness: 55,
	};
	const spring = useSpring(transform, physics);

	return (
		<>
			<motion.div
				ref={scrollRef}
				style={{ y: spring }}
				className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
			>
				{children}
			</motion.div>
			<div style={{ height: pageHeight }} />
		</>
	);
};
