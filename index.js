var express = require("express");
var app = express();
var redis = require("redis");

// Create a Redis client
var client = redis.createClient();

// Serve static files from public directory
app.use(express.static("public"));

// Initialize values for header, left, right, article, and footer using the redis client
const initialValues = {
  "header": 0,
  "left": 0,
  "right": 0,
  "article": 0,
  "footer": 0
};

Object.keys(initialValues).forEach(key => {
  client.set(key, initialValues[key]);
});

// Get values for holy grail layout
function data() {
  return new Promise((resolve, reject) => {
    client.mget(Object.keys(initialValues), (err, replies) => {
      if (err) {
        reject(err);
      } else {
        const data = {};
        replies.forEach((reply, index) => {
          data[Object.keys(initialValues)[index]] = reply;
        });
        resolve(data);
      }
    });
  });
}

// Update key-value pair
app.get("/update/:key/:value", function (req, res) {
  const key = req.params.key;
  let value = Number(req.params.value);

  client.set(key, value, (err, reply) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(`Updated ${key} to ${value}`);
    }
  });
});

// Get key data
app.get("/data", function (req, res) {
  data().then((data) => {
    console.log(data);
    res.send(data);
  }).catch(err => {
    res.status(500).send(err.message);
  });
});

app.listen(3000, () => {
  console.log("Running on 3000");
});

// Quit Redis client when the process exits
process.on("exit", function () {
  client.quit();
});
