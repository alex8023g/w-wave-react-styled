const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static('./dist'));
app.use('/img', express.static('./public/img'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, () => console.log('App is listening on port 3000!'));
