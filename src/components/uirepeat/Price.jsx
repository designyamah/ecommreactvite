import React from "react";

function Price({ booksalePrice, bookoriginalPrice }) {
  return (
    <div className="book__price">
      {booksalePrice ? (
        <>
          <span className="book__price--normal">
            ${bookoriginalPrice.toFixed(2)}
          </span>
          ${booksalePrice.toFixed(2)}
        </>
      ) : (
        <>${bookoriginalPrice.toFixed(2)}</>
      )}
    </div>
  );
}

export default Price;

{
  /* <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div> */
}
