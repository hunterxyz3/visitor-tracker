const express = require('express');
const app = express();
const os = require('os');
const useragent = require('express-useragent');
const cors = require('cors');

app.use(express.static(__dirname));
app.use(useragent.express());
app.use(cors());

app.get('/info', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const info = {
    ip: ip,
    device: req.useragent.platform,
    browser: req.useragent.browser,
    os: req.useragent.os,
    source: req.useragent.source
  };
  res.json(info);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));