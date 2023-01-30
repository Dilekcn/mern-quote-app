import React, { useState } from "react";

function AddQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Sending data to server");

    fetch("http://localhost:5000/quotes/add", {
      method: "POST",
      body: JSON.stringify({
        quote: quote,
        author: author,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" mb-3 bg-info">
          <label htmlFor="description" className=" form-label">
            Quote
          </label>
          <input
            type="text-area"
            className=" form-control"
            id="description"
            value={quote}
            onChange={(e) => setQuote(...quote, e.target.value)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="author" className=" form-label">
            Author
          </label>
          <input
            type="text"
            className=" form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(...author, e.target.value)}
          />
        </div>
        <button type="submit" className=" btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default AddQuote;
