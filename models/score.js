const connection = require('../connection/connect');
module.exports = {
    getLead: () => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT user.fullName,board.score
				FROM board 
				INNER JOIN user
                ON user.idUser = board.idUser
                ORDER BY Score Desc
				LIMIT 10 OFFSET 0`, (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
        })
    },
    getLeadById: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT user.fullName,board.score
				FROM board 
				INNER JOIN user
                ON user.idUser = board.idUser
                where user.idUser = ?
                ORDER BY Score Desc
				LIMIT 1 OFFSET 0`, idUser,(err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
        })
    },
    postBoard: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO board SET ? ', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateBoard: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE board SET score = ? WHERE idUser =? `, [data.score, data.idUser], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getPattern: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT pattren from pattern`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updatePattern: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE pattern SET ? WHERE idPattern = ?`, [data,1], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}
    