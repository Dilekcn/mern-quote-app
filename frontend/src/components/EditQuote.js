import React, { useEffect, useState } from "react";

function EditQuote() {
  const [editQuotes, setEditQuotes] = useState({ quote: "", author: "" });
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/quotes").then((quote) => {
      quote.json().then((res) => {
        setQuote(res);
      });
    });
  }, []);

  const setData = (data) => {
    console.log(data);
  };
  return (
    <div>
      {quote.map((quote) => (
        <form key={quote._id}>
          <div className=" mb-3 bg-info">
            <label htmlFor="description" className=" form-label">
              Quote
            </label>
            <input
              type="text-area"
              className=" form-control"
              value={quote.quote}
              onChange={(e) => {
                setEditQuotes({ ...quote, quote: e.target.value });
              }}
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
              value={quote.author}
              onChange={(e) => {
                setEditQuotes({ ...quote, author: e.target.value });
              }}
            />
          </div>
          <button type="submit" className=" btn btn-primary">
            Edit
          </button>
        </form>
      ))}
    </div>
  );
}

export default EditQuote;
