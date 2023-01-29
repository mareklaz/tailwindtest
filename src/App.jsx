import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/Containers/MainContainer';
import NavBar from './components/NavBar/NavBar';

import Home from './screens/Normal/Home';
import Productos from './screens/Shop/Productos';

function App() {
	return (
		<div>
			<NavBar />
			<MainContainer>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/productos' element={<Productos />} />
				</Routes>
			</MainContainer>
		</div>
	);
}

export default App;
