
const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./routes/api')(app);
require('./routes/index')

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})