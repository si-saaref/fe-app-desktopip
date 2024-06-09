import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';

import Signuppage from './pages/Signuppage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<main className='h-full min-h-screen'>
					<Routes>
						<Route path='*' element={<Homepage />} />
						<Route path='/' element={<Homepage />} />
						<Route path='/signin/*' element={<Loginpage />} />
						<Route path='/signup/*' element={<Signuppage />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
