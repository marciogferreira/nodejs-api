import express from 'express';

const PublicRoutes = express.Router();

PublicRoutes.get('/', (req, res) => {
    return res.send("Welcome to API NodeJs + Express");
})

export default PublicRoutes;