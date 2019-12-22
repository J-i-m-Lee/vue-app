import axios from 'axios'
export default function ajax(url="", params = {}, type = "GET") {
    let promise;
    return new Promise((resolve, reject) => {
        let dataStr;
        if (type.toUpperCase() === "GET") {
            Object.keys(params).forEach(key => {
                dataStr += key + "=" + params[key] + "&";
            });
            if (dataStr) {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
                url = url + '?' + dataStr;
            }
            promise = axios.get(url);

        } else if (type.toUpperCase() === "POST") {
            promise = axios.post(url, params);

        }
        promise.then(response => {
            resolve(response.data);
        }).catch(err=>{
            reject(err);
		})
    })
}