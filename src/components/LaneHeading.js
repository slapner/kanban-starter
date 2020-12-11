import { useDispatch } from 'react-redux';
import { moveLane } from '../store/boardSlice';

export default function LaneHeading({ name, canMoveLeft, canMoveRight }) {
	const dispatch = useDispatch();

	return (
		<div className="bg-blue-800 text-white text-center p-3 rounded-t-md flex">
			{canMoveLeft && (
				<button onClick={() => dispatch(moveLane({ dir: 'left', lane: name }))}>
					&lt;
				</button>
			)}
			<span className="px-2 flex-grow">{name}</span>
			{canMoveRight && (
				<button
					onClick={() => dispatch(moveLane({ dir: 'right', lane: name }))}
				>
					&gt;
				</button>
			)}
		</div>
	);
}
