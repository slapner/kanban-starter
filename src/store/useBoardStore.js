import create from 'zustand';

const initialState = {
	board: {
		New: [],
		'In Progress': [],
		Completed: [],
	},
};

const useBoardStore = create((set, get) => ({
	board: initialState.board,
	laneOrder: [...Object.keys(initialState.board)],
	addTask: (lane, value) => {
		set((state) => ({
			board: { ...state.board, [lane]: [...state.board[lane], value] },
		}));
	},
	move: (dir, fromLane, task) => {
		const laneOrder = get().laneOrder;
		const board = get().board;

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

		set({ board: { ...dest } });
	},
	moveLane: (dir, lane) => {
		const laneOrder = get().laneOrder;
		const from = laneOrder.indexOf(lane);
		const to = dir === 'right' ? from + 1 : from - 1;
		const lanesCopy = [...laneOrder];

		lanesCopy.splice(to, 0, lanesCopy.splice(from, 1)[0]);

		set({ laneOrder: [...lanesCopy] });
	},
}));

export { useBoardStore };
