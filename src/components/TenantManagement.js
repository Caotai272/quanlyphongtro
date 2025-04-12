// src/components/TenantManagement.js
import React, { useState } from 'react';

const TenantManagement = () => {
    const [tenant, setTenant] = useState({ name: '', phone: '', email: '', roomNumber: '' });
    const [tenants, setTenants] = useState([]);

    const handleAddTenant = () => {
        setTenants([...tenants, tenant]);
        setTenant({ name: '', phone: '', email: '', roomNumber: '' });
        alert('Khách thuê đã được thêm!');
    };

    return (
        <div className="container mt-4">
            <h2>Quản lý khách thuê</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tên khách thuê"
                    value={tenant.name}
                    onChange={(e) => setTenant({ ...tenant, name: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Số điện thoại"
                    value={tenant.phone}
                    onChange={(e) => setTenant({ ...tenant, phone: e.target.value })}
                />
                <input
                    type="email"
                    className="form-control mt-2"
                    placeholder="Email"
                    value={tenant.email}
                    onChange={(e) => setTenant({ ...tenant, email: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Số phòng"
                    value={tenant.roomNumber}
                    onChange={(e) => setTenant({ ...tenant, roomNumber: e.target.value })}
                />
                <button className="btn btn-primary mt-2" onClick={handleAddTenant}>
                    Thêm khách thuê
                </button>
            </div>
        </div>
    );
};

export default TenantManagement;