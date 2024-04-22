
import './CounterApp.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorConponent from './ErrorConponent';
import H2104 from './H2104';
import Counter from './Counter';


export default function CounterApp() {
    return (
        <div className="CounterApp">
            <BrowserRouter basename='/counter-app'>
                <Routes>
                    <Route path='/' element={<Counter />} />
                    <Route path='/2104' element={<H2104 />} />
                    <Route path='*' element={<ErrorConponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}









