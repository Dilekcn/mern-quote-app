import React from "react";

function EditQuote() {
  return (
    <>
      <form>
        <div className=" mb-3 bg-info">
          <label htmlFor="description" className=" form-label">
            Quote
          </label>
          <input
            type="text-area"
            className=" form-control"

            //   value={quote}
            //   onChange={(e) => setQuote(...quote, e.target.value)}
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
            //   value={author}
            //   onChange={(e) => setAuthor(...author, e.target.value)}
          />
        </div>
        <button type="submit" className=" btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default EditQuote;
