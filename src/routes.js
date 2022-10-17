import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

export default function Router() {
    return(
        <BrowserRouter>

            <Navigation/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    )
}