import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TiArrowSortedDown } from 'react-icons/ti';
import { RxHamburgerMenu } from 'react-icons/rx';
import HamburgerSidebar from '../Sidebar';
import { useUser } from '../../hooks/useUser';
import Button from '../Button';

export default function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { user, logout } = useUser();

	const [currentPath, setCurrentPath] = useState('');
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	useEffect(() => {
		const path = pathname.split('/')[1];
		setCurrentPath(path);
	}, [pathname, user]);

	const handleClickButton = () => {
		const targetPath = currentPath === 'signin' ? '/signup' : '/signin';

		if (user !== null) {
			console.log(user);
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
					<h1
						className='font-bold text-xl cursor-pointer'
						onClick={() => {
							navigate('/');
						}}
					>
						Myflix
					</h1>
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

				<Button onClick={handleClickButton} className='!min-w-fit px-3'>
					{user !== null ? 'Sign Out' : currentPath === 'signin' ? 'Sign Up' : 'Sign In'}
				</Button>
			</nav>
			{isOpenSidebar && <HamburgerSidebar setIsOpenSidebar={setIsOpenSidebar} />}
		</>
	);
}
