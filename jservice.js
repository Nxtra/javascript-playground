const request = require("request")
const fetch = require('node-fetch').default

var jserviceApi = request.defaults({
    baseUrl: "http://jservice.io/api/"
});

    exports.getRandomQuestion = function (cb) {
        jserviceApi.get("/random", function (error, response, body) {
            var question = JSON.parse(body)[0];
            cb(question.question);
        });
    }

    exports.fetchRandomQuestion = async function (){
        try {
            let response = await fetch('http://jservice.io/api/random', {
                method: 'GET',
                // headers: {
                //     'Accept': 'application/json; charset=utf-8'
                // },
                // timeout : 50000
            })
            if (response.status.toString()[0] !== '2') {
                console.log('The Jservice fetchRandomQuestion was unreachable: ' + response.text())
                throw {
                    response: {
                        statusCode: 404,
                        body: {message: 'Error while calling printing service, the printing service was unreachable.'}
                    }
                }
            }
            const data = await response.json()
            return data[0].question
        } catch (error) {
            if (error.response)
                throw error
            console.log('Error while requesting label: ' + error)
            throw{
                response: {
                    statusCode: 404,
                    body: {message: 'Error fetching randomQuestion'}
                }
            }

        }
    }


