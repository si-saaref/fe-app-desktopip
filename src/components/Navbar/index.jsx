import { useEffect, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
	const { pathname } = useLocation();
	const [currentPath, setCurrentPath] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const path = pathname.split('/')[1];
		setCurrentPath(path);
	}, [pathname]);

	const handleClickButton = () => {
		const targetPath = currentPath === 'signin' ? '/signup' : '/signin';
		navigate(targetPath);
	};

	return (
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

			<button
				className='bg-main-yellow text-main-blue font-bold px-3 py-1 rounded-3xl'
				onClick={handleClickButton}
			>
				{currentPath === 'signin' ? 'Sign Up' : 'Sign In'}
			</button>
		</nav>
	);
}
