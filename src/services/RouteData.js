import axios from 'axios'

const url ='http://localhost:3000'

const APIClient = axios.create({
    baseURL:url,
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