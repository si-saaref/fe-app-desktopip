import Carousel from 'react-multi-carousel';

export default function MiniMovieSlider({ category, listData }) {
	return (
		<>
			<h2 className='text-white text-3xl'>{category}</h2>
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
				{listData.map((movie) => (
					<div className='relative card cursor-pointer h-full' key={movie.id}>
						<img src={movie.image_thumbnail} alt='' />
						<div className='flex absolute bottom-6 left-3 right-3 z-10 gap-1 lg:gap-5 items-start lg:items-center flex-col lg:flex-row'>
							<h2 className='text-white text-xl lg:text-3xl'>{movie.title}</h2>
							<button className='px-3 py-1 bg-main-yellow rounded-lg'>Exclusive</button>
						</div>
					</div>
				))}
			</Carousel>
		</>
	);
}
