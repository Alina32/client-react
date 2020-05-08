import axios from 'axios';

export const getCities = () => {
    return axios
        .get('/api/cities', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addCities = (name, description, image) => {
    console.log(name, description)
    return axios
        .post(
            'api/cities',
            {
                name: name,
                description: description,
                image: image,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}

export const deleteCities = id => {
    return axios
        .post(`/api/cities/${id}`, 
        {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateCities = (name, description, image, id) => {
    return axios
        .put(
            `/api/cities/${id}`,
            {
                name: name,
                description: description,
                image: image
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}