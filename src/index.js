import React, { useState } from 'react';

const RoomManagement = () => {
    const [room, setRoom] = useState({ number: '', price: '', status: 'trống' });
    const [rooms, setRooms] = useState([]);

    const handleAddRoom = () => {
        setRooms([...rooms, room]);
        setRoom({ number: '', price: '', status: 'trống' });
        alert('Phòng đã được thêm!');
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
        </div>
    );
};

export default RoomManagement;