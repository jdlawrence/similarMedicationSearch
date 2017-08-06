const express = require('express');
const router = express.Router();
const rp = require('request-promise');

router.get('/', function (req, res) {
  res.send(JSON.stringify('cool'));
});

router.post('/search', function (req, res) {
  rp(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${req.body.medicine}`)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/lookup', function (req, res) {
  rp(`https://rxnav.nlm.nih.gov/REST/rxcui/${req.body.rxcui}/related.json?tty=IN`)
    .then(data => {
      const rxcui = JSON.parse(data).relatedGroup.conceptGroup[0].conceptProperties[0].rxcui;
      rp(`https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/related.json?tty=SCD+SBD`)
        .then(innerData => {
          let related = JSON.parse(innerData).relatedGroup
          console.log('innerData', related);
          res.send(related);
        })
        .catch(innerErr => {
          console.log('innerErr', innerErr);
          res.send(innerErr);
        });
    })
    .catch(err => {
      console.log('err', err);
      res.send(err);
    });
});
module.exports = router;
