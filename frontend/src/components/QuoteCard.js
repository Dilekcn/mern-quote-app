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

  return (
    <div className="grid text-center">
      {quote.map((quote) => (
        <div key={quote.id} className="card">
          <div className="card-body">
            <p class="card-text">{quote.quote}</p>

            <h4 className="card-title">{quote.author}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuoteCard;
