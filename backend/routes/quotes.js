const router = require("express").Router();

const Quote = require("../models/quotes.model");

router.route("/").get((req, res) => {
  Quote.find()
    .then((quotes) => res.json(quotes))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const quote = req.body.quote;
    const author = req.body.author;
    
    const newQuote = new Quote({
        quote,
        author,
    })
    newQuote.save().then(() => res.json("Quote added!!!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
