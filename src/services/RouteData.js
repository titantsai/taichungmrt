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
    getStation(id){
        return APIClient.get(`/StationInfos/${id}.json`)
    },
    getYouBikeStat(){
        return axios.get(`https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256`)
    }
}