import { useDispatch } from 'react-redux';

import TaskCard from './TaskCard';
import { move } from '../store/boardSlice';

export default function Task({ value, lane, canMoveLeft, canMoveRight }) {
	const dispatch = useDispatch();

	return (
		<TaskCard>
			{canMoveLeft && (
				<button
					onClick={() =>
						dispatch(move({ dir: 'left', fromLane: lane, task: value }))
					}
				>
					&lt;
				</button>
			)}
			<span className="px-2 flex-grow">{value}</span>
			{canMoveRight && (
				<button
					onClick={() =>
						dispatch(move({ dir: 'right', fromLane: lane, task: value }))
					}
				>
					&gt;
				</button>
			)}
		</TaskCard>
	);
}
