import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Servicos } from './pages/Servicos'
const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/quemsomos'
                    element={<QuemSomos />}
                />
                <Route 
                    path='/servicos'
                    element={<Servicos />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;