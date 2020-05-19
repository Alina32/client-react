import axios from 'axios';

export const getBooking = () => {
    return axios
        .get('/api/booking', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addBooking = (name, email, phone) => {
    console.log(name, phone, email)
    return axios
        .post(
            'api/booking',
            {
                name: name,
                email: email,
                phone: phone,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}
