import React, { useEffect, useState } from "react";

function QuoteCard() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/quotes").then((quote) => {
      quote.json().then((res) => {
        console.log(res[0].quote);
        setQuote(res);
      });
    });
  }, []);

  const deleteQuote = (id) => {
    fetch(`http://localhost:5000/quotes/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="d-flex flex-row gap-5 justify-content-center  flex-wrap">
      {quote.map((quote) => (
        <div
          key={quote._id}
          className="card bg-info p-3"
          style={{ width: "20rem" }}
        >
          <div className="card-body ">
            <p className="card-text">
              <span className="fs-3">“</span>
              {quote.quote}
              <span className="fs-3">”</span>
            </p>
            <h5 className="card-title">{quote.author} Card Title </h5>
          </div>
          <div className=" card-footer d-flex text-muted">
            <div className="p-1 flex-grow-1">
              <button className="btn btn-none ">🧡</button>
            </div>
            <button className="btn btn-warning p-1 mx-1">Edit</button>
            <button
              className="btn btn-warning p-1 mx-1"
              onClick={() => deleteQuote(quote._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuoteCard;
