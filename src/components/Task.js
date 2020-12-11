import TaskCard from './TaskCard';
import { useTask } from '../hooks/useTask';

export default function Task({ value, lane, canMoveLeft, canMoveRight }) {
	const { move } = useTask();

	return (
		<TaskCard>
			{canMoveLeft && (
				<button onClick={() => move('left', lane, value)}>&lt;</button>
			)}
			<span className="px-2 flex-grow">{value}</span>
			{canMoveRight && (
				<button onClick={() => move('right', lane, value)}>&gt;</button>
			)}
		</TaskCard>
	);
}
