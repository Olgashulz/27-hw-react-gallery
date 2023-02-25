import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import styles from '../css/modal.module.css'

const modalRoot = document.querySelector('#modal-root');

const Modal = ({children, onClose}) => {
    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
    }, []);

    // react component unmount
    useEffect(() => {
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    });

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            onClose(event);
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose(event);
        }
    };

    return createPortal(
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <div className={styles.image_modal}>{children}
                <button className={styles.modal_btn} onClick={onClose}></button>
            </div>
        </div>,
        modalRoot,
    );
}
export default Modal;