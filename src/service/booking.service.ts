import api from "./api";

export const createBooking = async (data: {
    carpenterId: number;
    date: string;
    time: string;
}) => {
    const token = localStorage.getItem('token');
    console.log(token)
    const res = await api.post('/bookings', data, {
        headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res.data);
    return res.data;
};
