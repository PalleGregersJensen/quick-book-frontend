import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import NoPage from './pages/NoPage.tsx';
import Hotels from './pages/Hotels.tsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
