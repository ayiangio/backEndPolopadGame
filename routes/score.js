module.exports = (app) => {
    const score = require('../controller/score');
    const auth = require('../response/auth')
    
    app
        .get('/score', auth.authInfo,score.getScore)
        .get('/score/:idUser', auth.authInfo,score.getScoreId)
        .post('/score', auth.authInfo, auth.accessToken, score.postScore)
}