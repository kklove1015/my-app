import React from "react";
import PropTypes from "prop-types";

function Book(props) {
  Book.propTypes = {
    name: PropTypes.string.isRequired,
    numOfPage: PropTypes.number.isRequired,
  };

  return (
    <div>
      <h1>{`이 책의 이름은 '${props.name}'입니다.`}</h1>
      <h2>{`이 책은 총 '${props.numOfPage}'페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
}

export default Book;
