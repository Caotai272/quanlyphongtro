// src/components/ReportManagement.js
import React, { useState } from 'react';

const ReportManagement = () => {
    const [month, setMonth] = useState('');
    const [report, setReport] = useState(null);

    const handleViewReport = () => {
        const fakeReport = {
            month: month,
            totalRevenue: 15000000,
            details: [
                { tenant: 'Nguyễn Văn A', amount: 5000000 },
                { tenant: 'Trần Thị B', amount: 5000000 },
                { tenant: 'Lê Văn C', amount: 5000000 },
            ],
        };
        setReport(fakeReport);
    };

    return (
        <div className="container mt-4">
            <h2>Báo cáo doanh thu</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tháng (VD: 10/2023)"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
                <button className="btn btn-info mt-2" onClick={handleViewReport}>
                    Xem báo cáo
                </button>
            </div>
            {report && (
                <div>
                    <h3>Báo cáo tháng {report.month}</h3>
                    <p>Tổng doanh thu: {report.totalRevenue.toLocaleString()} VNĐ</p>
                    <ul className="list-group">
                        {report.details.map((detail, index) => (
                            <li key={index} className="list-group-item">
                                Khách thuê: {detail.tenant}, Số tiền: {detail.amount.toLocaleString()} VNĐ
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ReportManagement;