
import CryptoJS from 'crypto-js'


const API_SECRET = '4db004767c6ffe061dcbb4ae0712db08'
const API_KEY = '558b3f9c42237087233d4091849e9072'
let httpUrl = new URL("https://spark-api.xf-yun.com/v3.1/chat");


export const getURL = () => {
    var apiKey = API_KEY
    var apiSecret = API_SECRET
    var url = 'wss://' + httpUrl.host + httpUrl.pathname
    var host = location.host
    console.log("host" + httpUrl.host)
    console.log("pathname" + httpUrl.pathname)
    console.log("host" + host)
    var date = new Date().toGMTString()
    var algorithm = 'hmac-sha256'
    var headers = 'host date request-line'
    var signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${httpUrl.pathname} HTTP/1.1`
    var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
    var signature = CryptoJS.enc.Base64.stringify(signatureSha)
    var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
    var authorization = btoa(authorizationOrigin)
    url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
    return url;
}


export default getURL 