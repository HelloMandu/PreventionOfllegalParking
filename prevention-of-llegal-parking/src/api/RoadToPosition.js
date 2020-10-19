import axios from 'axios';

const URL = "http://apis.vworld.kr/new2coord.do";
const KEY = "1900FD7A-218D-3222-991F-89EF603C2A17";
// ?&output=json&epsg=epsg:4326&apiKey=1900FD7A-218D-3222-991F-89EF603C2A17

export const roadToPosition = async (road) =>{
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const result = await axios.get(URL, {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     // 'Content-Type': 'application/json',
        //   },
        params: {
            q: road,
            output: 'json',
            epsg: 'epsg:4326',
            apiKey: KEY
        },
    })
    console.log(result);
    // return result.data.results.juso;
}