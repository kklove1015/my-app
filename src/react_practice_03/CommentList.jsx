import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "은다민",
    comment: "은다민의 댓글",
  },
  {
    name: "김철수",
    comment: "철수의 첫번째 댓글~!",
  },
  {
    name: "이원혁",
    comment: "나도 리액트 배울래!!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.comment} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
