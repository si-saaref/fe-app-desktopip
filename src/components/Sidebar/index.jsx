import { TiArrowSortedDown } from 'react-icons/ti';
import Portal from '../Portal';

export default function HamburgerSidebar({ setIsOpenSidebar }) {
	return (
		<Portal>
			<div
				className='absolute inset-0 backdrop-blur-sm z-30 bg-[#0e122585]'
				onClick={() => setIsOpenSidebar(false)}
			>
				<ul className='list-menu-navbar gap-10 flex absolute bg-second-blue p-10 flex-col rounded-2xl w-3/5 top-8 left-8 lg:hidden text-main-yellow'>
					<li className='cursor-pointer flex items-center text-xl lg:text-base '>Home</li>
					<li className='cursor-pointer flex items-center gap-1 text-xl lg:text-base'>
						Browse <TiArrowSortedDown size={20} />
					</li>
					<li className='cursor-pointer flex items-center gap-1 text-xl lg:text-base'>
						My Library <TiArrowSortedDown size={20} />
					</li>
				</ul>
			</div>
		</Portal>
	);
}
