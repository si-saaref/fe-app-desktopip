import { BsShare } from 'react-icons/bs';
import { MdPlayArrow } from 'react-icons/md';
import 'react-multi-carousel/lib/styles.css';

import { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-slideshow-image/dist/styles.css';
import Button from '../components/Button';
import { getListMovieBanner } from '../services/api';
import { useUser } from '../hooks/useUser';
import toast from 'react-hot-toast';

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
			const resp = await getListMovieBanner();
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
					autoPlaySpeed={3000}
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
				>
					{listMovie.map((movie) => (
						<main
							key={movie.id}
							className='relative big-banner w-full h-[70vh] flex items-end lg:items-center p-7 justify-start px-7 lg:px-16 rounded-xl lg:h-[90vh] pb-14'
							style={{
								backgroundImage: `url('${movie.image_thumbnail}')`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
							}}
						>
							<div className='text-content flex flex-col gap-3 items-start w-full lg:w-1/2 text-white z-10'>
								<h1 className=' font-extrabold text-6xl'>{movie.title}</h1>
								<h6 className='text-main-grey'>2022 | 2H 3m</h6>
								<p className='text-desc-movie-banner font-light text-main-grey'>{movie.overview}</p>
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
			<main className='list-movie px-10 py-20 flex gap-10 flex-col'>
				<h2 className='text-white text-3xl'>Sci-Fi</h2>
				<Carousel
					additionalTransfrom={0}
					arrows
					autoPlaySpeed={3000}
					centerMode={false}
					className=''
					containerClass='container max-w-full'
					dotListClass=''
					draggable
					focusOnSelect={false}
					infinite={false}
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
								max: 3000,
								min: 1024,
							},
							items: 3,
							partialVisibilityGutter: 40,
						},
						mobile: {
							breakpoint: {
								max: 464,
								min: 0,
							},
							items: 1,
							partialVisibilityGutter: 30,
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 464,
							},
							items: 2,
							partialVisibilityGutter: 30,
						},
					}}
					rewind={false}
					rewindWithAnimation={false}
					rtl={false}
					shouldResetAutoplay
					showDots={false}
					// sliderClass=''
					sliderClass='flex gap-10'
					slidesToSlide={1}
					swipeable
				>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<div className='flex absolute bottom-6 left-3 z-10 gap-5'>
							<h2 className='text-white text-3xl'>Vidio 1</h2>
							<button className='px-3 py-1 bg-main-yellow rounded-lg'>Exclusive</button>
						</div>
					</div>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio 2</h2>
					</div>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio Title</h2>
					</div>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio Title</h2>
					</div>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio Title</h2>
					</div>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio 4</h2>
					</div>
					<div className='relative card  h-full'>
						<img src='/img.jpg' alt='' />
						<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio 098</h2>
					</div>
				</Carousel>
			</main>
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
