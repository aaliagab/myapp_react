import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contador from "../pages/ContadorClicks";
import TestimonioPage from "../pages/TestimonioPage";

const Router = () =>{
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/testimonios" element={<TestimonioPage/>}/>
                <Route path="/contador-clicks" element={<Contador/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;