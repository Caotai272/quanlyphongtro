// src/components/RoomManagement.js (Cập nhật)
import React, { useState } from 'react';

const RoomManagement = () => {
    const [room, setRoom] = useState({ number: '', price: '', status: 'trống' });
    const [rooms, setRooms] = useState([]);
    const [history, setHistory] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');

    const handleAddRoom = () => {
        setRooms([...rooms, room]);
        setRoom({ number: '', price: '', status: 'trống' });
        alert('Phòng đã được thêm!');
    };

    const handleViewHistory = (roomNumber) => {
        const fakeHistory = [
            { tenant: 'Nguyễn Văn A', startDate: '01/01/2023', endDate: '01/06/2023' },
            { tenant: 'Trần Thị B', startDate: '01/07/2023', endDate: '01/12/2023' },
        ];
        setHistory(fakeHistory);
        setSelectedRoom(roomNumber);
    };

    return (
        <div className="container mt-4">
            <h2>Quản lý phòng trọ</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Số phòng"
                    value={room.number}
                    onChange={(e) => setRoom({ ...room, number: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Giá thuê"
                    value={room.price}
                    onChange={(e) => setRoom({ ...room, price: e.target.value })}
                />
                <select
                    className="form-control mt-2"
                    value={room.status}
                    onChange={(e) => setRoom({ ...room, status: e.target.value })}
                >
                    <option value="trống">Trống</option>
                    <option value="đã thuê">Đã thuê</option>
                </select>
                <button className="btn btn-primary mt-2" onClick={handleAddRoom}>
                    Thêm phòng
                </button>
            </div>
            <h3>Lịch sử thuê</h3>
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập số phòng để xem lịch sử"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                />
                <button
                    className="btn btn-info mt-2"
                    onClick={() => handleViewHistory(selectedRoom)}
                >
                    Xem lịch sử
                </button>
                {history.length > 0 && (
                    <ul className="list-group mt-2">
                        {history.map((entry, index) => (
                            <li key={index} className="list-group-item">
                                Khách thuê: {entry.tenant}, Từ: {entry.startDate} Đến: {entry.endDate}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default RoomManagement;