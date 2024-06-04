import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';

import Signuppage from './pages/Signuppage';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<main className='bg-main-blue h-full'>
					<Routes>
						<Route path='*' element={<Homepage />} />
						<Route path='/' element={<Homepage />} />
						<Route path='/signin/*' element={<Loginpage />} />
						<Route path='/signup/*' element={<Signuppage />} />
					</Routes>
				</main>
			</Router>
		</>
	);
}

export default App;
