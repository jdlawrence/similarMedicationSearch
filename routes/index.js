const express = require('express');
const router = express.Router();
const rp = require('request-promise');

router.get('/', function (req, res, next) {
  res.send(JSON.stringify('cool'));
});

router.post('/', function (req, res, next) {
  rp(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${req.body.medicine}`)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
