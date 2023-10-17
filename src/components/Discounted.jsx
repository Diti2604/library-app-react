import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <div>
      <section id="recent">
        <div className="container">
          <div className="row">
            <div className="section__title">
              <h2>
                Discount <span className="purple">Books</span>
              </h2>{" "}
            </div>
            <div className="books">
              {books
                .filter((book) => book.salePrice > 0)
                .slice(0, 8)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discounted;
