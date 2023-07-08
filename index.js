const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


// all Routs
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});



// Express App Initialize
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

