//카운터의 액션 타입 지정
//앞에 counter와 같은 모듈이름이 붙는 이유는 덕스패턴에서 다른 모듈과 이름이 중복되지 않게 하기위함
const SET_DIFF = "counter/SET_DIFF"; //몇 씩 더하거나 뺄지 지정해주는 액션
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//카운터의 액션 생성함수 작성
export const setDiff = (diff) => ({ type: SET_DIFF, diff }); //diff라는 파라미터를 받아서 나중에 action객체에 diff값을 넣어서 보낼것
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//리듀서에서 관리할 초기상태를 선언 (모듈의 초기상태작성)
const initState = {
  number: 0,
  diff: 1,
};

//카운터의 리듀서 작성
//리듀서는 export default를 사용하며 파라미터로 state와 acttion를 받는다. 이때 state의 기본값을 초기상태로 지정
export default function counter(state = initState, acttion) {
  switch (acttion.type) {
    case SET_DIFF:
      return {
        ...state,
        //action에서넘겨준 diff값으로 설정한다
        diff: acttion.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
