const express = require('express');
const router = express.Router();
const Campus = require('./models/campus');

//paths / urls
router.get(`/`, (req,res) => {
    console.log('/ route called.')
    res.send('<h1>The defense is ready, your honor.</h1>'
    +'<h1>The prosecution is also ready, your honor.</h1>'
    +'<hr>'
    + '<h2>/campus Returns all campuses in the database using .find()</h2>');
});

router.get(`/campus`, async (req,res) => {
    console.log('/campus route called.')
    try {
        res.json(await Campus.find());
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//vind één campus
router.get(`/campus/:id`, async (req,res) => {
    console.log('/campus/:id route called.')
    try {
        res.send(await Campus.findById(req.params.id));
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//voegt één campus toe
router.post(`/campus/create`, async (req,res) => {
    console.log('/campus/create route called.')
    try {
        res.send(await Campus.create(req.body));
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});
//update a single campus
router.put(`/campus/update/:id`, async (req,res) => {
    console.log('/campus/update/:id route called.')
    try {
        res.send(await Campus.create(req.params.id, {$set: req.body}));
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//vind en verwijdert één campus
router.delete(`/campus/:id`, async (req,res) => {
    console.log('/campus/:id route called.')
    try {
        res.send(await Campus.findByIdAndDelete(req.params.id));
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
