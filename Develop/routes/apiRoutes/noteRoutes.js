const { notes } = require('../../db/db.json');

const router = require('express').Router();

router.get('/notes', (req, res) => {
     let results = notes;

     res.json(results);
})

module.exports = router;