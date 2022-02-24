const fs = require('fs');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

module.exports = app => {

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
  let newnote = req.body
  newnote.id = uuidv4();
  notes.push(newnote);

  fs.writeFile("../db/db.json", JSON.stringify(notes), err => {
      if (err) {
          return err;
      }
  });
  res.json(notes);
});

app.delete('/api/notes/:id' , (req, res) => {
  deletednote = notes.indexOf(req.param.id);
  notes.splice(deletednote, 1)
  fs.writeFile("../db/db.json", JSON.stringify(notes), err => {
    if (err) {
        return err;
    }
});
res.json(notes);
})
}
