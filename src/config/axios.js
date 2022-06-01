import axios from 'axios'

const contextAxios = axios.create({

    baseURL: process.env.REACT_APP_BACKEND_URL

})

export default contextAxios; 
