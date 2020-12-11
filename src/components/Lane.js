import AddTask from './AddTask';
import LaneHeading from './LaneHeading';
import Task from './Task';
import TaskCard from './TaskCard';
import { uid } from 'react-uid';

import { useBoardStore } from '../store/useBoardStore';

export default function Lane({ name }) {
	const { board, laneOrder, addTask } = useBoardStore();
	const handleClick = () =>
		addTask(name, `Created ${name} task ${new Date().getTime()}`);

	const canMoveLeft = laneOrder.indexOf(name) > 0;
	const canMoveRight = laneOrder.indexOf(name) < laneOrder.length - 1;

	return (
		<div>
			<LaneHeading
				name={name}
				canMoveLeft={canMoveLeft}
				canMoveRight={canMoveRight}
			/>
			<div className="px-2 py-2 border border-gray-300 rounded-b-md">
				{!!board[name].length ? (
					board[name].map((task) => (
						<Task
							key={uid(task)}
							value={task}
							lane={name}
							canMoveLeft={canMoveLeft}
							canMoveRight={canMoveRight}
						/>
					))
				) : (
					<TaskCard>No {name} tasks</TaskCard>
				)}
				<AddTask handleClick={handleClick} />
			</div>
		</div>
	);
}
