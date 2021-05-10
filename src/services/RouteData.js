import axios from 'axios'

const url ='https://api.jsonbin.io/v3/b/60989f6da23274124b0166a6/latest'

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