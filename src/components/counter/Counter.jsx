import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

function Counter() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(count2);
        if (count2 === '02104') {
            setFlag(true)
            navigate('/2104', { state: { flag: true } })
        } else {
            setFlag(false)
        }
    }, [count2, navigate, flag]);


    function incrementCounter(by) {
        setCount(count + by)
        setCount2(count2.toString() + by.toString())

    }
    function decrementCounter(by) {
        setCount(count - by)
        setCount2(count2.toString() + by.toString())
    }
    function resetCounter() {
        setCount(0)
        setCount2(0)
        setFlag(false)
    }


    return (
        <>

            <span className="count">{count}</span>
            <div className='counter'>

                <CounterButton by={0} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton by={1} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton by={2} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton by={3} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton by={4} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton by={5} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />

            </div>
            <ResetButton resetMethod={resetCounter} />
        </>
    )
}

export default Counter