import React from "react";

// App(부모)
// ㄴ ChildComponent (자식)
//   ㄴ GrandChildComponent (후손) 


// 후손 컴포넌트
const GrandChildComponent = (props)=>{

  // props == ChildComponent
  const {name,age} = props;

  return(
    <h3>이름 : {name} / 나이 : {age} </h3>
  )

}

// 자식 컴포넌트
const ChildComponent = (props)=>{
  //props == App에서 전달 받은 값

  return(

    <>
    {/* App에서 전달 받은 값을 GrandChildComponent에 다시 전달 
      == "Props Drilling"
    */}
      <GrandChildComponent name={props.name} age={props.name === '김영희' ? 20 : 25}/>
    </>
  )

}

export default ChildComponent;