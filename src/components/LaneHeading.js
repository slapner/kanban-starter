import { useTask } from '../hooks/useTask';

export default function LaneHeading({ name, canMoveLeft, canMoveRight }) {
	const { moveLane } = useTask();

	return (
		<div className="bg-blue-800 text-white text-center p-3 rounded-t-md flex">
			{canMoveLeft && (
				<button onClick={() => moveLane('left', name)}>&lt;</button>
			)}
			<span className="px-2 flex-grow">{name}</span>
			{canMoveRight && (
				<button onClick={() => moveLane('right', name)}>&gt;</button>
			)}
		</div>
	);
}
