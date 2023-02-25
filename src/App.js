import './App.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import {useEffect, useState} from "react";
import {api_key, base_url} from "./utils/constans";
import Modal from "./components/Modal";


function App() {
    const [showModal, setShowModal] = useState(false);
    const [largeImage, setLargeImage] = useState(null);
    const [images, setImages] = useState([]);


    useEffect(() => {
        const page = Math.floor(Math.random() * 40) + 1;
        try {
            fetch(`${base_url}${api_key}q=${"nature"}&orientation=horizontal&per_page=9&page=${page}`)
                .then((response) => response.json())
                .then(data => {
                    setImages(data.hits)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const toggleModal = (event) => {
        setShowModal(!showModal);
        setLargeImage(event.target.dataset.source);
    };

    return (
        <div className="container">
            <Header/>
            <Gallery images={images} toggleModal={toggleModal}/>

            {showModal && (
                <Modal onClose={toggleModal}>
                    <img src={largeImage} className="largeImg" alt="big_image"/>
                </Modal>
            )}
        </div>
    );
}

export default App;
