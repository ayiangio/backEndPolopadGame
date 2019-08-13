module.exports = (app) => {
    const score = require('../controller/score');
    const auth = require('../response/auth')
    
    app
        .get('/score', auth.authInfo,score.getScore)
        .post('/score', auth.authInfo, auth.accessToken, score.postScore)
}