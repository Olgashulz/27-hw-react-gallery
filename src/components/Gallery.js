import Item from "./Item";
import styles from "../css/gallery.module.css"

const Gallery = ({images, toggleModal}) => {

    return (
        <ul className={styles.gallery}>
            {images.map((item, index) => <Item key={index} item={item} toggleModal={toggleModal}/>)}

        </ul>
    );
};

export default Gallery;