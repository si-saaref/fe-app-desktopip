import { MdPlayArrow } from 'react-icons/md';
import Button from '../Button';
import Portal from '../Portal';

import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

export default function MovieModal({ data, setIsOpenModal }) {
	const isMobile = useMediaQuery({
		query: '(max-width: 700px)',
	});

	return (
		<Portal>
			<div
				className='backdrop-portal absolute inset-0 backdrop-blur-md z-30 bg-[#0e122585] flex justify-center items-center'
				onClick={() => setIsOpenModal(false)}
			>
				<main
					onClick={(e) => e.stopPropagation()}
					key={data?.id}
					className='relative big-banner-detail w-8/12 h-[70vh] flex items-end p-7 justify-start px-7 lg:px-16 lg:h-[90vh] pb-8 bg-center bg-cover bg-no-repeat rounded-3xl'
					style={{
						backgroundImage: `url('${data?.image_thumbnail}')`,
					}}
				>
					<div className='text-content flex flex-col gap-3 items-start w-full text-white z-10'>
						<h1 className=' font-extrabold text-3xl lg:text-6xl'>{data?.title}</h1>
						<h6 className='text-[#FFFFFFA8]'>{data.release_date} | 2h 3min</h6>
						<p className='text-desc-movie-banner font-light text-[#FFFFFFA8]'>{data?.overview}</p>
						<div className='flex gap-3'>
							<Button className='min-w-24 !py-1'>
								<MdPlayArrow size={20} />
								Watch
							</Button>
							<Button className='!py-1 min-w-8 md:min-w-24 border-none' type='ghost'>
								<FaRegThumbsUp size={18} />
								{isMobile ? '' : 'I like this'}
							</Button>
							<Button className='!py-1 min-w-8 md:min-w-24 border-none' type='ghost'>
								<FaRegThumbsDown size={18} />
								{isMobile ? '' : 'Not for me'}
							</Button>
							<Button className='!py-1 min-w-8 md:min-w-20 border-none' type='ghost'>
								<BsShare size={18} className='text-main-yellow' />
								{isMobile ? '' : 'Share'}
							</Button>
						</div>
					</div>
				</main>
			</div>
		</Portal>
	);
}
