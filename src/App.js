import { uid } from 'react-uid';
import Lane from './components/Lane';

import { useSelector } from 'react-redux';
import { selectLaneOrder } from './store/boardSlice';

function App() {
	const laneOrder = useSelector(selectLaneOrder);

	return (
		<div className="container mx-auto pt-4">
			<div className="grid grid-cols-3 gap-4">
				{laneOrder.map((item) => (
					<Lane name={item} key={uid(item)} />
				))}
			</div>
		</div>
	);
}

export default App;
