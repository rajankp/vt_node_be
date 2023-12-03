const pool = require('../../db')
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req?.params?.id)
    pool.query(queries.getUserById, [id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows)
    })
}

const checkUserExists = (req, res) => {
    const { userName } = req.body;
    pool.query(queries.checkUserExists, [ userName ], (error, results) => {
        if(error) {
            throw error;
        }
        if(results.rows.length !== 0) {
            res.status(200).send('User already exists with same user name. Please retry')
        } else {
            addUser(req, res);
        }
    })
}

const addUser = (req, res) => {
    const {firstName, middleName, lastName, userName, age} = req.body;
    pool.query(queries.addUser, [firstName, middleName, lastName, userName, age], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(201).send("User added successfully")
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [ id ], (error, results) => {
        if(error) {
            throw error;
        }
        if(!results.rows.length) {
            res.send("User does not exist")
        } else {
            pool.query(queries.deleteUser, [ id ], (error, results) => {
                if(error) {
                    throw error;
                }
                res.status(201).send("User deleted successfully")
                
            })
        }
        
    })
}

module.exports = {
    getUsers,
    getUserById,
    checkUserExists,
    deleteUser
}