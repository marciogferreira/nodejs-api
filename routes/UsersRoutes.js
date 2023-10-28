import express from 'express';
import UsersController from '../controllers/UsersController.js';
import UserModel from '../models/UserModel.js';

const routeUsers = express.Router();

const usersController = new UsersController();

routeUsers.get('/users', usersController.findAll);

// routeUsers.route('/users')
//     .get((req, res) => {
//         const user = new UserModel();
//         const ress = user.findAll(function(error, results) {
//             res.json(results);
//         });
        
//         // return UsersController.findAll(req, res);
//     })
//     .post((req, res) => {
//         console.log(req.body)
//         return res.send("ola Amigo");
//         return UsersController.create(req, res);
//     })
//     .put((req, res) => {
//         return UsersController.update(req, res);
//     })
//     .delete((req, res) => {
//         return UsersController.delete(req, res);
//     });

routeUsers.get("/users/:id", (req, res) => {
    // req.params - ROTA DA URL /ID/nome
    // req.query - ? ROTA GET
    console.log();
    return res.send("Ola");
})

export default routeUsers;