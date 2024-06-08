import { useEffect } from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { Zoom } from 'react-slideshow-image';
import { BsShare } from 'react-icons/bs';

import 'react-slideshow-image/dist/styles.css';

export default function Homepage() {
	useEffect(() => {
		const bigBanner = document.querySelector('.big-banner');
		bigBanner.style.backgroundImage = '/img.jpg';
	}, []);

	return (
		<>
			<div className='w-[90%] m-auto pt-28 lg:pt-0 lg:w-full'>
				<Zoom
					arrows={false}
					indicators={() => (
						<div className='indicator-slideshow w-4 h-4 bg-white mr-3 rounded-full'></div>
					)}
					scale={1.4}
					autoplay={false}
				>
					<main
						className='relative big-banner w-full h-[70vh] flex items-end lg:items-center p-7 justify-start px-7 lg:px-16 rounded-xl lg:h-[90vh]'
						style={{
							backgroundImage: "url('/img.jpg')",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					>
						<div className='text-content flex flex-col gap-3 items-start w-full lg:w-1/2 text-white z-10'>
							<h1 className=' font-extrabold text-6xl'>Wadepak</h1>
							<h6 className='text-main-grey'>2022 | 2H 3m</h6>
							<p className='text-desc-movie-banner font-light text-main-grey'>
								Soda and Gembira are two best friends. Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Adipisci odio praesentium ratione explicabo quidem nemo non esse
								deserunt inventore error. Recusandae explicabo praesentium quaerat nulla pariatur
								dolor laboriosam! Perferendis nemo id reprehenderit consequuntur excepturi corporis
								neque facere molestias illum aspernatur tempore, maiores veniam exercitationem quo
								vel cupiditate ipsum. Illo fugit quo quaerat, quidem,
							</p>
							<div className='flex gap-3'>
								<button className='bg-main-yellow text-main-blue rounded-full py-2 font-bold flex gap-1 items-center min-w-32 justify-center'>
									<MdPlayArrow size={20} />
									Play
								</button>
								<button className='bg-transparent border-2 border-main-yellow rounded-full py-2 font-bold flex gap-1 items-center text-main-yellow min-w-32 justify-center'>
									<BsShare size={20} className='text-main-yellow' />
									Share
								</button>
							</div>
						</div>
					</main>
					{/* <main className='relative big-banner w-full bg-second-blue h-full flex items-center justify-start px-16 rounded-xl'>
						<div className='text-content flex flex-col gap-3 items-start w-1/2 text-white z-10'>
							<h1 className=' font-extrabold text-6xl'>Vidio Title Vidio Title Vidio Title</h1>
							<h6>2022 | 2H 3m</h6>
							<p className='text-desc-movie-banner'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odio praesentium
								ratione explicabo quidem nemo non esse deserunt inventore error. Recusandae
								explicabo praesentium quaerat nulla pariatur dolor laboriosam! Perferendis nemo id
								reprehenderit consequuntur excepturi corporis neque facere molestias illum
								aspernatur tempore, maiores veniam exercitationem quo vel cupiditate ipsum. Illo
								fugit quo quaerat, quidem, magnam obcaecati fugiat tempora facere alias autem natus
								similique, accusantium quam cum. Dolorem, dignissimos quae. Nobis voluptas suscipit
								reprehenderit. Deserunt sint, cupiditate fuga optio illo rerum impedit perspiciatis
								ad ab, quod quo! Earum adipisci aut dolorum omnis voluptate, eius pariatur dolores.
								Explicabo dolor ipsum veniam soluta aliquam?
							</p>
							<button className='bg-main-yellow text-main-blue rounded-full py-2 px-8 font-bold flex gap-1 items-center'>
								<MdPlayArrow size={20} />
								Play
							</button>
						</div>
					</main> */}
				</Zoom>
			</div>
			<main className='list-movie px-10 py-20 flex gap-10'>
				<div className='relative card w-80 h-full'>
					<img src='/img.jpg' alt='' />
					<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio Title</h2>
				</div>
				<div className='relative card w-80 h-full'>
					<img src='/img.jpg' alt='' />
					<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio Title</h2>
				</div>
				<div className='relative card w-80 h-full'>
					<img src='/img.jpg' alt='' />
					<h2 className='text-white absolute bottom-6 left-3 z-10'>Vidio Title</h2>
				</div>
			</main>
		</>
	);
}
