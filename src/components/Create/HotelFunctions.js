import axios from 'axios';

export const getHotels = () => {
    return axios
        .get('/api/create-hotels', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addHotel = (name, description, image, statistic, raiting, price, lat, lng, address) => {
    return axios
        .post(
            '/api/create-hotels',
            {
               name: name, 
               description: description, 
               image: image,
               statistic: statistic,
               raiting: raiting,
               price: price,
               lat: lat,
               lng: lng,
               address: address,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}

export const deleteHotel = id => {
    axios
        .post(`/api/create-hotels/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateHotel = (name, description, image, statistic, raiting, price, lat, lng, address, id) => {
    return axios
        .put(
            `/api/create-hotels/${id}`,
            {
                name: name, 
                description: description, 
                image: image,
                statistic: statistic,
                raiting: raiting,
                price: price,
                lat: lat,
                lng: lng,
                address: address,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}