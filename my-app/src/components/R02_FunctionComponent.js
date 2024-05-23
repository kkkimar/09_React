import React from "react"; /* imr -> 자동 완성 */
// 함수형 컴포넌트
// 1. 함수 생성하기
// 2. return 구문에 출력하고자 하는 html 코드 작성
// 3. 만든 함수를 export default 지정하기

const FunctionEx = ()=>{
  return(
    /* 리액트 컴포넌트에 class 추가 시 className 이라고 작성! */
    <>
      <h2 className="red">함수형 컴포넌트 입니다~</h2>
    </>

  );
}

export default FunctionEx;