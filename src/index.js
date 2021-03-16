import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const firstBook = {
  img_url: "https://m.media-amazon.com/images/I/41IKgg+GYVL._AC_UY218_.jpg",
  title: "Seelengift Narzisstische Mütter und ihre Töchter",
  author: "Lea Lasatone",
};

const secondBook = {
  img_url: "https://m.media-amazon.com/images/I/41XM76gEeNL._AC_UY218_.jpg",
  title: "Die Geschichte der Bienen: Roman",
  author: "Maja Lunde",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img_url={firstBook.img_url}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img_url={secondBook.img_url}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img_url} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
