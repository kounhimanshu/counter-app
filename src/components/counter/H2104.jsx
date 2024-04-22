import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function H2104() {
    const location = useLocation();
    const flag = location.state?.flag || false;
    const navigate = useNavigate()

    const images = [
        process.env.PUBLIC_URL + '/h2104/1.jpg',
        process.env.PUBLIC_URL + '/h2104/2.jpg',
        process.env.PUBLIC_URL + '/h2104/3.jpg',
        process.env.PUBLIC_URL + '/h2104/4.jpg',
        process.env.PUBLIC_URL + '/h2104/5.jpg',
        process.env.PUBLIC_URL + '/h2104/6.jpg',
        process.env.PUBLIC_URL + '/h2104/7.jpg'
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); 

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            {flag && <div className='h2104'>

                <div className="slideshow-container">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={index === currentIndex ? 'slide active' : 'slide'}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))} toyou toyou
                </div>
                <div className="empty">

                </div>
                <div className="text">
                    Happy Birthday Harshita
                </div>
                

            </div>}

            {!flag && <div className="not2104">
                <h1>Sorry you don't have access to this</h1>
                <button className='resetButton'
                    onClick={() => { navigate('/') }}>
                    Return Home
                </button>
            </div>}
        </>
    )
}

export default H2104

