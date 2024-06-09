import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TiArrowSortedDown } from 'react-icons/ti';
import { RxHamburgerMenu } from 'react-icons/rx';
import HamburgerSidebar from '../Sidebar';
import { useUser } from '../../hooks/useUser';

export default function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { user, logout } = useUser();

	const [currentPath, setCurrentPath] = useState('');
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	useEffect(() => {
		const path = pathname.split('/')[1];
		setCurrentPath(path);
	}, [pathname]);

	const handleClickButton = () => {
		const targetPath = currentPath === 'signin' ? '/signup' : '/signin';

		if (user !== null) {
			logout();
		} else {
			console.log(user);
			navigate(targetPath);
		}
	};

	return (
		<>
			<nav className='w-[95%] m-auto absolute left-1/2 -translate-x-1/2 top-4 bg-main-blue text-main-yellow flex justify-between px-6 py-4 rounded-lg items-center z-20'>
				<div className='flex gap-14 justify-between w-1/2 lg:w-auto relative'>
					<RxHamburgerMenu
						className='text-white lg:hidden cursor-pointer'
						size={28}
						onClick={() => {
							setIsOpenSidebar(true);
						}}
					/>
					<h1 className='font-bold text-xl'>Myflix</h1>
					<ul className='list-menu-navbar gap-7 hidden lg:flex'>
						<li className='cursor-pointer flex items-center text-xl lg:text-base'>Home</li>
						<li className='cursor-pointer flex items-center gap-1 text-xl lg:text-base'>
							Browse <TiArrowSortedDown size={20} />
						</li>
						<li className='cursor-pointer flex items-center gap-1 text-xl lg:text-base'>
							My Library <TiArrowSortedDown size={20} />
						</li>
					</ul>
				</div>

				<button
					className='bg-main-yellow text-main-blue font-bold px-3 py-1 rounded-3xl'
					onClick={handleClickButton}
				>
					{user !== null ? 'Sign Out' : currentPath === 'signin' ? 'Sign Up' : 'Sign In'}
				</button>
			</nav>
			{isOpenSidebar && <HamburgerSidebar setIsOpenSidebar={setIsOpenSidebar} />}
		</>
	);
}
