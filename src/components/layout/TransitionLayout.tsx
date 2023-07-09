// // prettier-ignore
// "use client";

// import { gsap } from "gsap";
// import { TransitionContext } from "../context/TransitionContext";
// import {
// 	useState,
// 	useContext,
// 	useRef,
// 	useEffect,
// } from "react";
// import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

// export default function TransitionLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	const [displayChildren, setDisplayChildren] =
// 		useState(children);
// 	const { timeline } = useContext(TransitionContext);
// 	const el = useRef<HTMLDivElement>(null);

// 	useIsomorphicLayoutEffect(() => {
// 		console.log("CHILDREN CHANGED");
// 		if (children !== displayChildren) {
// 			if (timeline?.duration() === 0) {
// 				// there are no outro animations, so immediately transition
// 				setDisplayChildren(children);
// 			} else {
// 				timeline?.play().then(() => {
// 					// outro complete so reset to an empty paused timeline
// 					timeline?.seek(0).pause().clear();
// 					setDisplayChildren(children);
// 				});
// 			}
// 		}
// 	}, [children]);

// 	return <div ref={el}>{displayChildren}</div>;
// }
