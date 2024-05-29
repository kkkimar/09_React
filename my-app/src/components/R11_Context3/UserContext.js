import React,{createContext} from 'react';

//(context == 값, 설정을 저장하는 공간)
/* context 객체 생성 */
const UserContext = createContext();

//외부에서 import 시 내보내줄 기본 값 설정
export default UserContext;