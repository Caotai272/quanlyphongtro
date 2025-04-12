// src/components/PaymentManagement.js
import React, { useState } from 'react';

const PaymentManagement = () => {
    const [payment, setPayment] = useState({ tenantName: '', amount: '', month: '' });
    const [payments, setPayments] = useState([]);

    const handleAddPayment = () => {
        setPayments([...payments, payment]);
        setPayment({ tenantName: '', amount: '', month: '' });
        alert('Thanh toán đã được ghi nhận!');
    };

    return (
        <div className="container mt-4">
            <h2>Quản lý thanh toán</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tên khách thuê"
                    value={payment.tenantName}
                    onChange={(e) => setPayment({ ...payment, tenantName: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Số tiền"
                    value={payment.amount}
                    onChange={(e) => setPayment({ ...payment, amount: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Tháng thanh toán"
                    value={payment.month}
                    onChange={(e) => setPayment({ ...payment, month: e.target.value })}
                />
                <button className="btn btn-primary mt-2" onClick={handleAddPayment}>
                    Ghi nhận thanh toán
                </button>
            </div>
        </div>
    );
};

export default PaymentManagement;