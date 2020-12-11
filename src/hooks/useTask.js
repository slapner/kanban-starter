import React from 'react';

const TaskContext = React.createContext();

function TaskProvider(props) {
	const [board, setBoard] = React.useState({
		New: [],
		'In Progress': [],
		Completed: [],
	});

	const [laneOrder, setLaneOrder] = React.useState(Object.keys(board));

	const addTask = (lane, value) => {
		setBoard((state) => ({
			...state,
			[lane]: [...state[lane], value],
		}));
	};

	const move = (dir, fromLane, task) => {
		const currentLaneIndex = laneOrder.indexOf(fromLane);
		const destinationLane =
			dir === 'right'
				? laneOrder[currentLaneIndex + 1]
				: laneOrder[currentLaneIndex - 1];

		const filteredLane = board[fromLane].filter((item) => item !== task);

		const dest = {
			...board,
			[fromLane]: [...filteredLane],
			[destinationLane]: [...board[destinationLane], task],
		};

		setBoard({ ...dest });
	};

	const moveLane = (dir, lane) => {
		const from = laneOrder.indexOf(lane);
		const to = dir === 'right' ? from + 1 : from - 1;
		const lanesCopy = [...laneOrder];

		lanesCopy.splice(to, 0, lanesCopy.splice(from, 1)[0]);

		setLaneOrder([...lanesCopy]);
	};

	const value = { board, laneOrder, addTask, move, moveLane };

	return <TaskContext.Provider {...props} value={value} />;
}

function useTask() {
	const context = React.useContext(TaskContext);
	if (!context) {
		throw new Error(`useTask must be used within the TaskProvider`);
	}
	return context;
}

export { TaskProvider, useTask };
