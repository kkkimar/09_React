import React,{useState,useContext} from 'react';

/* 사용할 외부 Contect 객체 import */
import UserContext  from './UserContext';

/* 자식 컴포넌트 정의 */
const Child = ()=>{

  /* Context를 이용해 제공 받은 값 얻어오기 */
  // {"userList" : userList , "setUserList" : setUserList}
    // - 객체의 key 값을 변수명과 똑같이 작성하여
  //   값이 알아서 대입 되도록 함
  const {userList, setUserList} = useContext( UserContext );

  /* 자식 컴포넌트 상태 변수 선언 */
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  /* 이벤트 핸들러 */
  // 추가 버튼 클릭 시 입력된 이름,나이를 userList에 추가
  const addUser = ()=>{

    //상태변수 값을 이용해 user 객체 생성
    const user = {"name" : inputName, "age" : inputAge};

    //userList를 깊은 복사 + user 데이터 추가
    const newUserList = [...userList, user];
    
    //부모 상태변수 userList를 변경하는 함수를 이용해
    //newUserList를 세팅 -> 부모 컴포넌트를 리랜더링
    setUserList(newUserList);

    // userList.push(user) <- 이 방법 안됨!!!
    
    //자식 컴포넌트 상태 변수 값 초기화
    setInputAge('');
    setInputName('');
  }

  return(
    <div>
      <label htmlFor='id'>이름 : </label>
      <input type='text' id='id' onChange={(e)=>{setInputName(e.target.value)}}
      value={inputName}/>

      <br/>

      <label htmlFor='age'>나이 : </label>
      <input type='number' id='age' onChange={(e)=>{setInputAge(e.target.value)}}
      value={inputAge}/>
      <button onClick={addUser}>추가</button>
    </div>

  );

}

export default Child;