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
    }
}
    