import { AiOutlineLoading } from 'react-icons/ai';

export default function Button({
	children,
	className = '',
	type = 'primary',
	isLoading = false,
	fullWidth = false,
	onClick,
	disabled = false,
}) {
	if (type === 'ghost') {
		return (
			<button
				className={`bg-transparent text-main-yellow border-2 border-main-yellow rounded-full py-2 font-bold flex gap-1 items-center ${
					fullWidth ? 'w-full' : 'min-w-32'
				} justify-center disabled:text-main-grey disabled:bg-[#666] duration-500 ${className}`}
				onClick={onClick}
				disabled={disabled}
			>
				{isLoading ? <AiOutlineLoading className='animate-spin' /> : children}
			</button>
		);
	}
	return (
		<button
			className={`bg-main-yellow text-main-blue rounded-full py-2 font-bold flex gap-1 items-center ${
				fullWidth ? 'w-full' : 'min-w-32'
			} justify-center disabled:text-main-grey disabled:bg-[#666] duration-500 ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{isLoading ? <AiOutlineLoading className='animate-spin' /> : children}
		</button>
	);
}
