import express from 'express';
import UsersRoutes from './UsersRoutes.js';

const PrivateRoutes = express.Router();

PrivateRoutes.use('*', (req, res, next) => {

    const authorization = req.headers.authorization;

    if(!authorization) {
        res.status(403).json({
            message: 'Not Authorized'
        });
    }

    
    next();
});
PrivateRoutes.use(UsersRoutes);

export default PrivateRoutes;