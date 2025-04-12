// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomManagement from './components/RoomManagement';
import TenantManagement from './components/TenantManagement';
import PaymentManagement from './components/PaymentManagement';
import ReportManagement from './components/ReportManagement';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Quản lý nhà trọ</Link>
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/rooms">Quản lý phòng</Link>
                            <Link className="nav-link" to="/tenants">Quản lý khách thuê</Link>
                            <Link className="nav-link" to="/payments">Quản lý thanh toán</Link>
                            <Link className="nav-link" to="/reports">Báo cáo</Link>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/rooms" element={<RoomManagement />} />
                    <Route path="/tenants" element={<TenantManagement />} />
                    <Route path="/payments" element={<PaymentManagement />} />
                    <Route path="/reports" element={<ReportManagement />} />
                    <Route path="/" element={<h1 className="text-center mt-4">Chào mừng đến với hệ thống quản lý nhà trọ</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;