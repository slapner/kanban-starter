import { createSlice } from '@reduxjs/toolkit';

const initialBoardState = {
	New: [],
	'In Progress': [],
	Completed: [],
};

export const boardSlice = createSlice({
	name: 'board',
	initialState: {
		board: initialBoardState,
		laneOrder: [...Object.keys(initialBoardState)],
	},
	reducers: {
		addTask: (state, action) => {
			const { lane, value } = action.payload;
			state.board = {
				...state.board,
				[lane]: [...state.board[lane], value],
			};
		},
		move: (state, action) => {
			const { dir, fromLane, task } = action.payload;
			const { board, laneOrder } = state;
			const currentLaneIndex = laneOrder.indexOf(fromLane);
			const destinationLane =
				dir === 'right'
					? laneOrder[currentLaneIndex + 1]
					: laneOrder[currentLaneIndex - 1];

			const filteredLane = board[fromLane].filter((item) => item !== task);

			state.board = {
				...board,
				[fromLane]: [...filteredLane],
				[destinationLane]: [...board[destinationLane], task],
			};
		},
		moveLane: (state, action) => {
			const { dir, lane } = action.payload;
			const from = state.laneOrder.indexOf(lane);
			const to = dir === 'right' ? from + 1 : from - 1;
			const lanesCopy = [...state.laneOrder];

			lanesCopy.splice(to, 0, lanesCopy.splice(from, 1)[0]);

			state.laneOrder = [...lanesCopy];
		},
	},
});

export const { addTask, move, moveLane } = boardSlice.actions;

export const selectBoard = (state) => state.board.board;
export const selectLaneOrder = (state) => state.board.laneOrder;

export default boardSlice.reducer;
