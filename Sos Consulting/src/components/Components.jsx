import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Faq from './Pages/Faq';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import Accordian from './Pages/Accordian';
import Button from './Pages/Button';
import IconBoxStyle from './Pages/IconBoxStyle';
import IconFont from './Pages/IconFont';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import ScrollToTop from './Common/ScrollToTop';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />
                            <Route path='/services' element={<Services/>} />
                            <Route path='/faq' element={<Faq/>} />
                            <Route path='/error' element={<Error/>} />
                            <Route path='/contactus' element={<ContactUs/>} />
                            <Route path='/accordian' element={<Accordian/>} />
                            <Route path='/button' element={<Button/>} />
                            <Route path='/iconboxstyle' element={<IconBoxStyle/>} />
                            <Route path='/iconfont' element={<IconFont/>} />
                            <Route path='/listgroup' element={<ListGroup/>} />
                            <Route path='/modalpopup' element={<ModalPopup/>} />                         
                            <Route element={<Error/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;