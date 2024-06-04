import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';

function App() {
	return (
		<>
			<Router>
				<div className='lg:w-2/5 md:w-2/3 sm:w-full m-auto'>
					<Routes>
						<Route path='*' element={<Homepage />} />
						<Route path='/' element={<Homepage />} />
						<Route path='/login/*' element={<Loginpage />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
