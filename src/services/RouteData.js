import axios from 'axios'

//https://my-json-server.typicode.com/titantsai/taichungmrt

const APIClient = axios.create({
    baseURL:`http://localhost:3000`,
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    getRoute(){
        return APIClient.get('/routes')
    },
    getStation(ID){
        return APIClient.get('/StationInfos/'+ID)
    }
}