import React, { useState } from "react";

function QuoteVotes() {
  const [totalVotes, setTotalVotes] = useState(0);
  function increaseVotesByOne() {
    setTotalVotes(totalVotes + 1);
  }

  return (
    <div>
      <span onClick={increaseVotesByOne}>🧡 {totalVotes}</span>
    </div>
  );
}

export default QuoteVotes;
