// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../hooks/useUser';

import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';

export default function Loginpage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isShowPassword, setIsShowPassword] = useState(false);

	// const navigate = useNavigate();

	const { login } = useUser();

	const handleLogin = async () => {
		const data = {
			email,
			password,
		};

		await login(data);
	};

	return (
		<>
			<main className='m-auto w-1/2 absolute top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-3xl h-[80%] flex items-center justify-center'>
				<div className='w-4/5 flex flex-col gap-4'>
					<h1 className='text-main-blue text-3xl font-bold'>Sign In</h1>
					<div className='flex flex-col'>
						<label htmlFor='email' className='text-main-grey'>
							Email
						</label>
						<input
							type='text'
							name='email'
							id='email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Email'
						/>
					</div>
					<div className='flex flex-col relative'>
						<label htmlFor='password' className='text-main-grey'>
							Password
						</label>
						<input
							type={`${!isShowPassword ? 'password' : 'text'}`}
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id='password'
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Password'
						/>
						{password.length === 0 ? (
							''
						) : !isShowPassword ? (
							<LuEye
								className='absolute bottom-2 right-2 cursor-pointer'
								onClick={() => setIsShowPassword(true)}
							/>
						) : (
							<LuEyeOff
								className='absolute bottom-2 right-2 cursor-pointer'
								onClick={() => setIsShowPassword(false)}
							/>
						)}
					</div>
					<button
						className='bg-main-yellow text-main-blue rounded-full py-2 font-bold disabled:text-main-grey disabled:bg-[#666] duration-500'
						// disabled
						onClick={handleLogin}
					>
						Sign In
					</button>
					<a className='text-center text-main-blue' href=''>
						Forgot Password?
					</a>
					<h1 className='text-center text-main-grey'>
						Don&apos;t have an account?{' '}
						<a href='/signup' className='text-main-blue'>
							Sign Up
						</a>
					</h1>
				</div>
			</main>
		</>
	);
}
