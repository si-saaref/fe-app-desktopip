import ReactDOM from 'react-dom';

export default function Portal({ children }) {
	const modalRoot = document.getElementById('portal-root');
	return ReactDOM.createPortal(children, modalRoot);
}
