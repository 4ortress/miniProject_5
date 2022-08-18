import axios from 'axios';

const BASE_URL = 'http://api.kcisa.kr/openapi/service/rest/other/getBUSN2801'; /*URL*/
let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '서비스키 ㅎ'; /*서비스키*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*세션당 요청레코드수*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지수*/

export async function fetchApi() {
    const data = await axios.get(BASE_URL + queryParams)
        .then(response => response.data.response.body.items.item)
        .then(data => data)
    return data;
}