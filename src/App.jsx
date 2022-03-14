
import { lazy, Suspense } from 'react' 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
// import ItemListContiner from './Container/ItemListContiner';
import ItemDetailContianer from './Container/ItemDetailContainer/ItemDetailContianer';
import Cart from './componentes/Cart/Cart';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import ItemListContiner from './Container/ItemListContiner';
const ItemListContiner = lazy(()=> import('./Container/ItemListContiner'))

function App() { // componenete contendor
 
    // Input({ placeholder: 'ingrese el nombre' })
    return (
        <Suspense fallback={<h1>Cargando ...</h1>} >
            <BrowserRouter>
                <div className="App" >
                    <NavBar />     
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <ItemListContiner 
                                    saludo= 'hola soy ItemListContiner' 
                                />
                            } 
                        />
                        <Route 
                            path="/categoria/:id" 
                            element={
                                <ItemListContiner 
                                    saludo= 'hola soy ItemListContiner' 
                                />
                            } 
                        />
                        <Route path='/detalle/:detalleId' element={<ItemDetailContianer />}/>
                        <Route path='/cart' element={<Cart />}/>
                        {/* <Route path='/notFound' element={<Componente404 />}/> */}
                        
                        <Route path='/*' element={<Navigate to='/' />} />
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>

    )
}

export default App;
