export default function AddTask({ handleClick }) {
	return (
		<div className="flex justify-center">
			<button
				className="py-2 px-4 bg-white text-blue-700 font-bold border-2 border-blue-700 rounded-md"
				onClick={handleClick}
			>
				Add Task
			</button>
		</div>
	);
}
