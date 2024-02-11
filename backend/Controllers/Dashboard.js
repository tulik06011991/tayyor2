const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const dashboard = (req, res) =>{
    res.status(200).json({username: req.username, email: req.email})
}

module.exports = dashboard