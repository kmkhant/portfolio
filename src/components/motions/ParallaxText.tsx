import { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
	children: string;
	baseVelocity: number;
	big?: boolean;
}

export function ParallaxText({
	children,
	baseVelocity,
	big = false,
}: ParallaxProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});

	const velocityFactor = useTransform(
		smoothVelocity,
		[0, 1000],
		[0, 5],
		{
			clamp: false,
		}
	);

	const x = useTransform(
		baseX,
		(v) => `${wrap(-20, -45, v)}%`
	);

	const directionFactor = useRef<number>(1);

	useAnimationFrame((t, delta) => {
		let moveBy =
			directionFactor.current *
			baseVelocity *
			(delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy +=
			directionFactor.current *
			moveBy *
			velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
			<motion.div
				className={`uppercase ${
					big ? "text-6xl" : "text-4xl"
				} flex whitespace-nowrap flex-nowrap font-bold py-2`}
				style={{ x }}
			>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
				<span className="block mr-16">{children} </span>
			</motion.div>
		</div>
	);
}
