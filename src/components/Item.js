import React from 'react';
import styles from '../css/gallery__item.module.css'

const Item = ({item, toggleModal}) => {
    return <li onClick={toggleModal} className={styles.gallery__item}>
        <img
            className={styles.gallery__image}
            src={item.webformatURL}
            data-source={item.largeImageURL}
            alt={item.tags[0]}
        />
    </li>
};

export default Item;