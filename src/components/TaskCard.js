export default function TaskCard({ children }) {
	return (
		<div className="bg-gray-200 rounded-md shadow-md p-3 my-2 flex">
			{children}
		</div>
	);
}
