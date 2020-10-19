import axios from 'axios';

const URL = "http://apis.vworld.kr/new2coord.do";
const KEY = "1900FD7A-218D-3222-991F-89EF603C2A17";

export const roadToPosition = async (road) =>{
    const result = await axios.get(URL, {
        params: {
            q: road,
            output: 'json',
            epsg: 'epsg:4326',
            apiKey: KEY
        },
    }).then(req => {
        console.log(req);
    })
}