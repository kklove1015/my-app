import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동한다
  useEffect(() => {
    // 브라우저 API를 사용하여 document의 title을 업데이트 한다.
    document.title = `You Clicked ${count} times`;
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}
export default Counter;
