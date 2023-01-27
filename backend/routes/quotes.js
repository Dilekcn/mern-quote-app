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
  });
  newQuote
    .save()
    .then(() => res.json("Quote added!!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Quote.findById(req.params.id)
    .then((quotes) => res.json(quotes))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Quote.findByIdAndDelete(req.params.id)
    .then((quotes) => res.json("Quote deleted!!!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").put((req, res) => {
  Quote.findById(req.params.id)
    .then((quote) => {
      quote.quote = req.body.quote;
      quote.author = req.body.author;

      quote
        .save()
        .then(() => res.json("Quote updated!!!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
