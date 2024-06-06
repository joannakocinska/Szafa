var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* POST users listing. */
router.post('/', function(req, res, next) {
    const filePath = path.join(__dirname, '././shoes.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        try {
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error parsing JSON');
        }
    });
});

module.exports = router;
