import axios from 'axios'

const url ='https://taichungmetro-github-default-rtdb.firebaseio.com/'

const APIClient = axios.create({
    baseURL:url,
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json'
    }
})

export default{
    getRoute(){
        return APIClient.get('./routes.json')
    },
    getStation(){
        return APIClient.get('/StationInfos/0.json')
    }
}