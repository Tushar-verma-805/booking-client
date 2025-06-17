import api from "./api";

export const fetchCarpenters = async () => {
    const token = localStorage.getItem('token');
    console.log(token, "inside carpenter")
    const res = await api.get('/carpenters', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};


export const fetchBookedSlots = async (id: number, date: string) => {
    const token = localStorage.getItem('token');
    const res = await api.get(`/bookings/carpenter/${id}?date=${date}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

