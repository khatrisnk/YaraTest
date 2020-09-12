const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
    const API_KEY = shortid.generate();
    try {
        fs.appendFile(VALID_KEYS_PATH, API_KEY + LINE_ENDING, function (err) {
            if (err) {
                throw new Error('Failed in Writing API KEY');
            } else {
                res.status(201).json({ apiKey: API_KEY });
            }
        });
    } catch (err) {
        console.log(err);
    }
};

