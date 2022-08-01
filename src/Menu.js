import React from 'react'
import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom'
import HOC from './HOC/index'
import ExceptionalHandling from './ExceptionHandling/index'
import ReusableComponent from './ReusableComponent/index'

export const Menu = () => {
    return (
        <div >
            <BrowserRouter>
                <ul className='menu'>
                    <li><Link to="/hoc">HOC</Link></li>
                    <li><Link to="/exception"> Exception Handling</Link></li>
                    <li><Link to="/reusable">Reusable Component</Link></li>
                </ul>
                <Routes>
                    <Route path="/hoc" element={<HOC />} />
                    <Route path="/exception" element={<ExceptionalHandling />} />
                    <Route path="/reusable" element={<ReusableComponent />} />
                    <Route path="*" element={<Navigate to="/hoc" />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
