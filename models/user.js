const connection = require('../connection/connect');

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT fullName,email,idUser FROM user where status=1`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getDetailUser: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE idUser = ?', Number(idUser), (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    register: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })                       
        })
    },
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT idUser, email, fullName, salt, password, status FROM user WHERE email = ?', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })

        })
    },
    updateToken: (email, token) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET token = ? WHERE email =?`, [token, email], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteToken: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET token = ? WHERE idUser =?`, [' ', Number(idUser)], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getToken: (token) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT token FROM user where token=?`,token, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}