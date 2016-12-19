import axios from 'axios';
const THE_GUADIAN_API_URL = 'https://content.guardianapis.com/search?show-fields=all&type=article&api-key=' + process.env.GUARDIANKEY;

/**
 * Module to use the guardian api
 * @type {{getLastNews: (()), getNews: ((p1?:*))}}
 */
module.exports = {
    /**
     * Function that fetches the latest news on the guardian api
     * @returns {axios.Promise}
     */
    getLastNews: () => {
        const requestUrl = `${THE_GUADIAN_API_URL}`;
        return axios.get(requestUrl).then((res) => {
            if(res.status !== 200 && res.statusText !== "OK"){
                throw new Error(res.data.message);
            } else {
                return res.data.response.results;
            }
        }, (err) => {
            throw new Error(err.data.message);
        })
    },
    getNews: (subject) => {
        const encodedsubject = encodeURIComponent(subject);
        let requestUrl = `${THE_GUADIAN_API_URL}&q=${encodedsubject}`;

        return axios.get(requestUrl).then((res) => {

        }, (err) => {
            throw new Error(err.data.message);
        })
    }
};
