import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonioPage from "../pages/TestimonioPage";

const Router = () =>{
    return(
        <BrowserRouter>
            <a href='/testimonios'>Testimonios</a>
            <br/>
            <a href='/contador-clicks'>Contador de Clicks</a>
            <Routes>
                <Route path="/testimonios" element={<TestimonioPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;