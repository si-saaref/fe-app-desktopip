export default function Signuppage() {
	return (
		<>
			<main className='m-auto w-1/2 absolute top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-3xl h-[80%] flex items-center justify-center'>
				<div className='w-4/5 flex flex-col gap-4'>
					<h1 className='text-main-blue text-3xl font-bold'>Sign Up</h1>
					<div className='flex flex-col'>
						<label htmlFor='username' className='text-main-grey'>
							Username
						</label>
						<input
							type='text'
							name='username'
							id='username'
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Username'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='email' className='text-main-grey'>
							Email
						</label>
						<input
							type='text'
							name='email'
							id='email'
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Email'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='password' className='text-main-grey'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Password'
						/>
					</div>
					<button
						className='bg-main-yellow text-main-blue rounded-full py-2 font-bold disabled:text-main-grey disabled:bg-[#666] duration-500'
						// disabled
					>
						Sign Up
					</button>
				</div>
			</main>
		</>
	);
}
