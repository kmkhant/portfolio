import { delay } from "@/utils/delay";
import { useReducedMotion, useSpring } from "framer-motion";
import { MutableRefObject, useEffect, useRef } from "react";

// prettier-ignore
const glyphs = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ', 'ー',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ',
];

const CharType = {
	Glyph: "glyph",
	Value: "value",
};
interface IDecodeText {
	text: string;
}

const shuffle = (
	content: string[],
	output: {
		type: string;
		value: string;
	}[],
	position: number
) => {
	return content.map((value, index) => {
		if (index < position) {
			return { type: CharType.Value, value };
		}

		if (position % 1 < 0.5) {
			const rand = Math.floor(
				Math.random() * glyphs.length
			);
			return { type: CharType.Glyph, value: glyphs[rand] };
		}

		return {
			type: CharType.Glyph,
			value: output[index].value,
		};
	});
};

export const DecodeText: React.FC<IDecodeText> = ({
	text,
}) => {
	const output = useRef([
		{ type: CharType.Glyph, value: "" },
	]);
	const container = useRef<HTMLSpanElement>(null);
	const decoderSpring = useSpring(0, {
		stiffness: 8,
		damping: 4,
	});

	useEffect(() => {
		const containerInstance = container.current;
		const content = text.split("");

		const renderOutput = () => {
			const characterMap = output.current.map(
				(item, key) => {
					return `<span>${item.value}</span>`;
				}
			);

			if (containerInstance)
				containerInstance.innerHTML = characterMap.join("");
		};

		const unSubscribeSpring = decoderSpring.on(
			"change",
			(value) => {
				output.current = shuffle(
					content,
					output.current,
					value
				);
				renderOutput();
			}
		);

		const startSpring = async () => {
			await delay(300);
			decoderSpring.set(content.length);
		};

		startSpring();

		return () => {
			unSubscribeSpring?.();
		};
	}, [decoderSpring, text]);

	return (
		<span>
			<span aria-hidden ref={container} />
		</span>
	);
};
