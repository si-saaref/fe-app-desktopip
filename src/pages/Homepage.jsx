import { BsShare } from 'react-icons/bs';
import { MdPlayArrow } from 'react-icons/md';
import 'react-multi-carousel/lib/styles.css';

import { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-slideshow-image/dist/styles.css';
import Button from '../components/Button';
import { getListMiniMovie, getListMovieBanner } from '../services/api';
import { useUser } from '../hooks/useUser';
import toast from 'react-hot-toast';
import MiniMovieSlider from '../components/MiniMovieSlider';

export default function Homepage() {
	const { user } = useUser();

	const [listMovie, setListMovie] = useState([]);
	const [listMiniMovie, setListMiniMovie] = useState([]);

	const fetchAllListMovie = useCallback(async () => {
		try {
			const resp = await getListMovieBanner();
			console.log(resp);
			setListMovie(resp);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const fetchListMiniMovie = useCallback(async () => {
		try {
			const resp = await getListMiniMovie();
			setListMiniMovie(resp);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchAllListMovie();
		fetchListMiniMovie();
	}, [fetchAllListMovie, fetchListMiniMovie]);

	const handleClickPlay = () => {
		if (user === null) {
			toast.error('You have to login first to watch the movie');
			return;
		}
	};

	return (
		<>
			<div className='w-[90%] m-auto pt-28 lg:pt-0 lg:w-full'>
				<Carousel
					additionalTransfrom={0}
					arrows={false}
					autoPlaySpeed={5000}
					centerMode={false}
					className=''
					containerClass='container max-w-full'
					customDot={<CustomDot />}
					dotListClass='flex gap-2 bottom-5 justify-start px-10 lg:px-20 lg:bottom-16'
					draggable
					focusOnSelect={false}
					infinite
					itemClass=''
					keyBoardControl
					minimumTouchDrag={80}
					pauseOnHover
					renderArrowsWhenDisabled={false}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					responsive={{
						desktop: {
							breakpoint: {
								max: 4000,
								min: 1024,
							},
							items: 1,
						},
						mobile: {
							breakpoint: {
								max: 464,
								min: 0,
							},
							items: 1,
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 464,
							},
							items: 1,
						},
					}}
					rewind={false}
					rewindWithAnimation={false}
					rtl={false}
					shouldResetAutoplay
					showDots
					sliderClass=''
					slidesToSlide={1}
					swipeable
					autoPlay
				>
					{listMovie.map((movie) => (
						<main
							key={movie.id}
							className='relative big-banner w-full h-[70vh] flex items-end lg:items-center p-7 justify-start px-7 lg:px-16 rounded-xl lg:h-[90vh] pb-14'
							style={{
								backgroundImage: `url('${movie.image_thumbnail}')`,
								backgroundPosition: 'right',
								backgroundSize: '60%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className='text-content flex flex-col gap-3 items-start w-full lg:w-1/2 text-white z-10'>
								<h1 className=' font-extrabold text-3xl lg:text-6xl'>{movie.title}</h1>
								<h6 className='text-[#FFFFFFA8]'>2022 | 2H 3m</h6>
								<p className='text-desc-movie-banner font-light text-[#FFFFFFA8]'>
									{movie.overview}
								</p>
								<div className='flex gap-3'>
									<Button onClick={handleClickPlay}>
										<MdPlayArrow size={20} />
										Play
									</Button>
									<Button type='ghost'>
										<BsShare size={20} className='text-main-yellow' />
										Share
									</Button>
								</div>
							</div>
						</main>
					))}
				</Carousel>
			</div>
			<div className='list-movie px-10 py-20 flex gap-10 flex-col'>
				<MiniMovieSlider category='Popular' listData={listMiniMovie} />
			</div>
		</>
	);
}

const CustomDot = ({ onClick, active }) => {
	return (
		<li
			className={`${
				active ? 'active' : 'inactive'
			} indicator-slideshow w-5 h-5 rounded-full bg-slate-200 cursor-pointer`}
			onClick={() => onClick()}
		/>
	);
};
