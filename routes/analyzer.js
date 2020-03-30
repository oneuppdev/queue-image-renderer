const express = require('express');
const Tesseract = require('tesseract.js');
const router = express.Router();


router.post('/:lang', (req, res) => {
    const source = req.body.source.path;
    const language = req.params.lang;

    Tesseract.recognize(
        source,
        language,
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        console.log(text);
        res.send(text);
      })
});

module.exports = router;