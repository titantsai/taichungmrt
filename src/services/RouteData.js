import axios from 'axios'

const APIClient = axios.create({
    baseURL:`https://my-json-server.typicode.com/titantsai/taichungmrt`,
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
    getStation(route){
        return APIClient.get('/routes/'+route)
    }
}