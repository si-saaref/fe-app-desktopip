import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

export default function Footer() {
	const pathName = useLocation().pathname.split('/')[1];
	const isTablet = useMediaQuery({
		query: '(min-width: 800px)',
	});

	return (
		<footer
			className={`bg-main-yellow text-main-blue w-full rounded-tl-3xl rounded-tr-3xl ${
				pathName === 'signin' || pathName === 'signup' ? 'hidden' : 'block'
			}`}
		>
			<div className={`p-10 flex-col gap-9  ${isTablet ? 'hidden' : 'flex'}`}>
				<h1 className='text-center text-4xl font-bold'>MyFlix</h1>
				<div className='flex flex-col gap-2'>
					<h2 className='text-main-blue text-xl font-bold'>Follow Us</h2>
					<ul className='flex w-3/5 justify-between px-2'>
						<FaFacebook size={28} className='cursor-pointer' />
						<FaInstagram size={28} className='cursor-pointer' />
						<FaTiktok size={28} className='cursor-pointer' />
						<FaTwitter size={28} className='cursor-pointer' />
						<FaYoutube size={28} className='cursor-pointer' />
					</ul>
				</div>
				<div className='flex flex-col gap-2'>
					<h2 className='text-main-blue text-xl font-bold'>Contact Us</h2>
					<div className='flex gap-4 items-center px-2'>
						<MdMail className='text-white cursor-pointer' size={20} />
						<p>Email to user@mail.com</p>
					</div>
					<div className='flex gap-4 items-center px-2'>
						<BsTelephoneFill className='text-white cursor-pointer' size={20} />
						<p>Call 082143215678</p>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<h2 className='text-main-blue text-xl font-bold'>Address</h2>
					<div className='flex gap-4 items-center px-2'>
						<FaMapMarkerAlt className='text-white cursor-pointer' size={20} />
						<p>Address</p>
					</div>
				</div>
			</div>
			<div className='bg-second-blue p-5 flex items-center justify-center text-white'>
				<h1>Powered by Mocaas.tv</h1>
			</div>
		</footer>
	);
}
