const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');

module.exports = function (req, res, next) {
    try {
        const { 'x-api-key': apiKey } = req.header;
    
        if (!req.header) {
            res.status(401);
            return;
        }
    
        fs.readFile(VALID_KEYS_PATH, (err, data) => {
            if (err) {
                throw new Error('Error in reading KEY file');
            }
            if (data.includes(apiKey)) {
                next();
            }
        });
    } catch (err) {
        console.log(err);
    }
};
