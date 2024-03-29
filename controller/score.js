const score = require('../models/score');
const respon = require('../response/response');
const jwt = require('jsonwebtoken')

module.exports = {
    getScore: (req, res) => {
        score.getLead()
            .then((resultUser) => {
                respon.response(res, resultUser, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getPattern: (req, res) => {
        score.getPattern()
            .then((resultUser) => {
                respon.response(res, resultUser, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    updatePattern: (req, res) => {
        const data = {
            pattren : req.body.pattren
        }
        console.log(data)
        score.updatePattern(data)
            .then((resultUser) => {
                respon.response(res, resultUser, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getScoreId: (req, res) => {
        const idUser = req.params.idUser
        score.getLeadById(idUser)
            .then((resultUser) => {
                respon.response(res, resultUser, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    postScore: (req, res) => {
        const data = {
            idUser : req.body.idUser,
            score:  req.body.score
        }
        score.postBoard(data)
            .then(() => {
                respon.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    updateScore: (req, res) => {
        const data = {
            idUser : req.body.idUser,
            score:  req.body.score
        }
        score.updateBoard(data)
            .then(() => {
                respon.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}