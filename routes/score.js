module.exports = (app) => {
    const score = require('../controller/score');
    const auth = require('../response/auth')
    
    app
        .get('/score', auth.authInfo,score.getScore)
        .get('/score/:idUser', auth.authInfo,score.getScoreId)
        .post('/score', auth.authInfo, auth.accessToken, score.postScore)
        .patch('/score', auth.authInfo, auth.accessToken, score.updateScore)
        .get('/pattern',auth.authInfo,score.getPattern)
        .patch('/pattern', auth.authInfo, auth.accessToken, score.updatePattern)
}