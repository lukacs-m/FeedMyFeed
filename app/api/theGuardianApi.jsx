let axios = require('axios');
const THE_GUADIAN_API_URL = 'https://content.guardianapis.com/search?show-fields=all&type=article&api-key=' + process.env.GUARDIANKEY;

module.exports = {
    getLastNews: () => {
        const requestUrl = `${THE_GUADIAN_API_URL}`;
        return axios.get(requestUrl).then((res) => {
            if(res.status !== 200 && res.statusText !== "OK"){
                throw new Error(res.data.message);
            } else {
                console.log("la reponse est", res);
                return res.data.response.results;
            }
        }, (err) => {
            throw new Error(err.data.message);
        })
    },
    getNews: function(subject){
        const encodedsubject = encodeURIComponent(subject);
        let requestUrl = `${THE_GUADIAN_API_URL}&q=${encodedsubject}`;

        return axios.get(requestUrl).then((res) => {

        }, (err) => {
            throw new Error(err.data.message);
        })
    }
};
