import React, {useState} from "react";

/* 자식 컴포넌트 */
const ChildId = (props) => {
  //const handler = props.handler;
  const {handler} = props;
  console.log(handler); //handler 확인
  return(
    <div className="wrapper">
      {/* 리액트에선 -> htmlFor == for 속성 */}
      <label htmlFor="inputId">ID</label>
      {/* nChange : 값이 바꼈을 때 */}
      <input type="text" id="inputId" onChange={handler} />
      {/* input 값이 바뀌었을 때 부모로부터 전달 받은 함수 handler를 수행
          자식 쪽에서 이벤트 발생 !!!!
      */}
    </div>
  )
}

const ChildPw = ({handler}) => {
  return(
    <div className="wrapper">
      {/* 리액트에선 -> htmlFor == for 속성 */}
      <label htmlFor="inputPw">PW</label>
      <input type="password" id="inputPw" onChange={handler}/>
    </div>
  )
}

const ChildTest = (props) =>{
  return(
    <div>
      <button onClick={()=>{props.handler("BBB")}}>변경하기</button>
    </div>
  )
}


/* 부모 컴포넌트 */
const ParentComponent = () => {
  // 상태변수 선언(State, useState)
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 이벤트 : 동작, 행위
  // 이벤트 리스너 : 동작(이벤트) 감지
  // 이벤트 핸들러 : 이벤트가 감지 되었을 때 수행할 함수

  // 이벤트 핸들러 정의
  const idHandler = e => {
    setId(e.target.value)
  }
  const pwHandler = e => {
    setPw(e.target.value)
  }

  const [test, setTest] = useState('A');
  const testFn = (str) => {
    setTest(str);
  }

  return(
    <>
      {/* props를 이용해 이벤트 핸들러용 함수를
          자식 컴포넌트에게 전달
      */}
      <ChildId handler={idHandler}/>
      <ChildPw handler={pwHandler}/>

      <div className="wrapper">
        <button disabled={id.length === 0 || pw.length === 0}>Login</button>
      </div>

      <h2>test 값 : {test}</h2>
      <ChildTest handler={testFn}/>
    </>

  );


}

export default ParentComponent;