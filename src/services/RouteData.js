import axios from 'axios'
//import jsSHA from 'jssha'

const url ='https://taichungmetro-github-default-rtdb.firebaseio.com/'

const APIClient = axios.create({
    baseURL:url,
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

// const GetAuthorizationHeader=()=>{
//     let AppID = 'c48fa21c86cc4d09913f9f5ff49a8ff9';
//     let AppKey = '21p51wndihCNdkztosM0CJ3v2ww';

//     let GMTString = new Date().toGMTString();
//     let ShaObj = new jsSHA('SHA-1', 'TEXT');
//     ShaObj.setHMACKey(AppKey, 'TEXT');
//     ShaObj.update('x-date: ' + GMTString);
//     let HMAC = ShaObj.getHMAC('B64');
//     let Authorization = 'hmac username="/' + AppID + '/", algorithm="hmac-sha1", headers="x-date", signature="/' + HMAC + '/"';
//     return { 'Authorization': Authorization, 'X-Date': GMTString };
// }


const PTX = axios.create({
    // headers: GetAuthorizationHeader()
    }   
)

export default{
    getRoute(){
        return APIClient.get('./routes.json')
    },

    getStationInfo(id){
        return APIClient.get(`/StationInfos/${id}.json`)
    },

    getStationTransfer(id){
        return APIClient.get(`/StationTransfer/${id}.json`)
    },

    getYouBikeStat(){
        return axios.get(`https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256`)
    },

    getFare(ori,des){
        if(ori === des){return}
        return PTX.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TMRT?$filter=OriginStationID%20eq%20'${ori}'%20and%20DestinationStationID%20eq%20'${des}'&$format=JSON`)
    }

}