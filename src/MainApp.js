import React from 'react';
import { Navbar } from './Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Inicio } from './Inicio';
import { NuevoProducto } from './NuevoProducto';
import { Buscar } from './Buscar';

export const MainApp = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='inicio' element={<Inicio />} />
                <Route path='nuevo' element={<NuevoProducto />} />
                <Route path='buscar' element={<Buscar />} />

                <Route path='*' element={<Navigate to='/inicio' />} />
            </Routes>
        </BrowserRouter>
    </>
}

