import { useState } from 'react';
import { useUser } from '../hooks/useUser';

import { LuEye, LuEyeOff } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../components/Button';

export default function Signuppage() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	const [isShowPassword, setIsShowPassword] = useState(false);
	const navigate = useNavigate();

	const { register } = useUser();

	const handleSignUp = async () => {
		try {
			setIsLoading(true);
			const isUsernameContainSpace = /\s/g.test(username);

			if (isUsernameContainSpace) {
				toast.error('Username should not contain space.');
				return;
			}

			const data = {
				email,
				password,
				username,
			};

			const response = await register(data);
			if (response.status === 201) {
				navigate('/signin');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<main className='m-auto w-11/12 lg:w-1/3 absolute top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-3xl h-[80%] flex items-center justify-center'>
				<div className='w-10/12 lg:w-4/5 flex flex-col gap-4'>
					<h1 className='text-main-blue text-3xl font-bold'>Sign Up</h1>
					<div className='flex flex-col'>
						<label htmlFor='username' className='text-main-grey'>
							Username
						</label>
						<input
							type='text'
							name='username'
							id='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Username'
							autoComplete='off'
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full rounded-lg border-2 px-2 py-1 text-main-grey'
							placeholder='Email'
							autoComplete='off'
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
							autoComplete='off'
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
					<Button
						disabled={!(username && email && password)}
						onClick={handleSignUp}
						isLoading={isLoading}
					>
						Sign Up
					</Button>
				</div>
			</main>
		</>
	);
}
