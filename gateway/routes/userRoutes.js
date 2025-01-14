const express = require('express');
const axios = require('axios');
const router = express.Router();

router.use(async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://localhost:4000/users${req.url}`,
            data: req.body,
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
    }
});

module.exports = router;
