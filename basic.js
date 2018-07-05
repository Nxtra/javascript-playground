const jservice = require("./jservice");

jservice.getRandomQuestion(function (question) {
    console.log('getRandomQuestion : ' + question)
});

async function f() {
    let question = await jservice.fetchRandomQuestion()
    console.log('fetchRandomQuestion : ' + question)
}

f()



