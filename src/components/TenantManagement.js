// src/components/TenantManagement.js (Cập nhật)
import React, { useState } from 'react';

const TenantManagement = () => {
    const [tenant, setTenant] = useState({ name: '', phone: '', email: '', roomNumber: '' });
    const [tenants, setTenants] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTenant = () => {
        if (editIndex !== null) {
            const updatedTenants = [...tenants];
            updatedTenants[editIndex] = tenant;
            setTenants(updatedTenants);
            setEditIndex(null);
            alert('Thông tin khách thuê đã được cập nhật!');
        } else {
            setTenants([...tenants, tenant]);
            alert('Khách thuê đã được thêm!');
        }
        setTenant({ name: '', phone: '', email: '', roomNumber: '' });
    };

    const handleEditTenant = (index) => {
        setTenant(tenants[index]);
        setEditIndex(index);
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
                    {editIndex !== null ? 'Cập nhật khách thuê' : 'Thêm khách thuê'}
                </button>
            </div>
            <h3>Danh sách khách thuê</h3>
            <ul className="list-group">
                {tenants.map((t, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        {t.name} - {t.phone} - {t.email} - Phòng: {t.roomNumber}
                        <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleEditTenant(index)}
                        >
                            Sửa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TenantManagement;