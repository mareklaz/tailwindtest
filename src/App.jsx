import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/Containers/MainContainer';
import NavBar from './components/NavBar/NavBar';

import Home from './screens/Misc/Home';
import Direcciones from './screens/Usuario/Direcciones';
import Historico from './screens/Usuario/Historico';
import Pedido from './screens/Usuario/Pedido';
import Productos from './screens/Usuario/Productos';

function App() {
	return (
		<div>
			<NavBar />
			<MainContainer>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/productos' element={<Productos />} />
					<Route path='/pedido' element={<Pedido />} />
					<Route path='/historico' element={<Historico />} />
					<Route path='/direcciones' element={<Direcciones />} />
				</Routes>
			</MainContainer>
		</div>
	);
}

export default App;
