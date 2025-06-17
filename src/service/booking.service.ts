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


export const fetchMyBookings = async () => {
    const token = localStorage.getItem('token');
    const res = await api.get(`/bookings/user`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

export const cancelBooking = async (bookingId: string) => {

    const token = localStorage.getItem('token');
    const res = await api.delete(`/bookings/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};
