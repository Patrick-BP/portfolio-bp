const express = require('express'); 

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Remove 'Bearer ' from token string if present
        const tokenString = token.startsWith('Bearer ') ? token.slice(7) : token;
        
        // Verify the token
        const verified = jwt.verify(tokenString, process.env.JWT_SECRET);
        
        // Add user info to request object
        req.user = verified;
        
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = verifyToken;
