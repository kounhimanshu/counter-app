import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorConponent() {
    // 
    // useEffect(() => {
    //     navigate('/')
    // }, [navigate]);

    const navigate = useNavigate();

    return (
        <div>
            <h1>I'm sorry that you lost your way</h1>
            <button className='resetButton'
                    onClick={() => { navigate('/') }}>
                    Return Home
            </button>
        </div>
    )
}
export default ErrorConponent