const jwt = require('jsonwebtoken');
const secretKey = require('../../config/secretkey').ACCESS_TOKEN_SECRET;
const accessOptions = require('../../config/secretkey').accessOption;
const refreshOptions = require('../../config/secretkey').refreshOption;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
    /**
     * make JWT
     * 
     * @param {Object} payload 
     * @param {String} issuer
     * @returns 
     */

    sign: async (payload, issuer) => {
        payload.iss = issuer;
        const result = new Object();

        try {
            result.accessToken = jwt.sign(payload, secretKey, accessOptions);
            result.refreshToken = jwt.sign(payload, secretKey, refreshOptions);
        } catch (error) {
            result.err = error;
        }
        return result;
    },

    verify: async (token) => {
        let decoded;
        try {
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log('invalid token');
                return TOKEN_INVALID;
            }
        }
        return decoded;
    }
}