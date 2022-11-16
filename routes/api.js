const path = require('path');
const fs = require('fs');

var uniqid = require('uniqid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let usersNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        };

        db.push(usersNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'))

        let deleteNote = db.filter(item => item.id !== req.params.id);

        fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    })

};