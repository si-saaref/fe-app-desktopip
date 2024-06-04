import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import { TiArrowSortedDown } from 'react-icons/ti';
import Signuppage from './pages/Signuppage';

function App() {
	return (
		<>
			<Router>
				<nav className='w-[95%] m-auto absolute left-1/2 -translate-x-1/2 top-4 bg-main-blue text-main-yellow flex justify-between px-6 py-4 rounded-lg items-center'>
					<div className='flex gap-14'>
						<h1 className='font-bold'>Myflix</h1>
						<ul className='flex gap-7'>
							<li className='cursor-pointer flex items-center'>Home</li>
							<li className='cursor-pointer flex items-center gap-1'>
								Browse <TiArrowSortedDown size={20} />
							</li>
							<li className='cursor-pointer flex items-center gap-1'>
								My Library <TiArrowSortedDown size={20} />
							</li>
						</ul>
					</div>

					<button className='bg-main-yellow text-main-blue font-bold px-3 py-1 rounded-3xl'>
						Sign Up
					</button>
				</nav>
				<main className='bg-second-blue h-screen'>
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
