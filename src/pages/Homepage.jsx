import { useEffect } from 'react';
import { MdPlayArrow } from 'react-icons/md';

export default function Homepage() {
	useEffect(() => {
		const bigBanner = document.querySelector('.big-banner');
		bigBanner.style.backgroundImage = '/img.jpg';
	}, []);

	return (
		<>
			<main className='relative big-banner w-full bg-second-blue h-[90vh] flex items-center justify-start px-16'>
				<div className='text-content flex flex-col gap-3 items-start w-1/2 text-white z-10'>
					<h1 className=' font-extrabold text-6xl'>Vidio Title Vidio Title Vidio Title</h1>
					<h6>2022 | 2H 3m</h6>
					<p className='text-desc-movie-banner'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odio praesentium
						ratione explicabo quidem nemo non esse deserunt inventore error. Recusandae explicabo
						praesentium quaerat nulla pariatur dolor laboriosam! Perferendis nemo id reprehenderit
						consequuntur excepturi corporis neque facere molestias illum aspernatur tempore, maiores
						veniam exercitationem quo vel cupiditate ipsum. Illo fugit quo quaerat, quidem, magnam
						obcaecati fugiat tempora facere alias autem natus similique, accusantium quam cum.
						Dolorem, dignissimos quae. Nobis voluptas suscipit reprehenderit. Deserunt sint,
						cupiditate fuga optio illo rerum impedit perspiciatis ad ab, quod quo! Earum adipisci
						aut dolorum omnis voluptate, eius pariatur dolores. Explicabo dolor ipsum veniam soluta
						aliquam?
					</p>
					<button className='bg-main-yellow text-main-blue rounded-full py-2 px-8 font-bold flex gap-1 items-center'>
						<MdPlayArrow size={20} />
						Play
					</button>
				</div>
			</main>
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
