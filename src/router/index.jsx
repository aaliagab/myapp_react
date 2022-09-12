import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonioPage from "../pages/TestimonioPage";

const Router = () =>{
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/testimonios" element={<TestimonioPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;