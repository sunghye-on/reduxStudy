import React from "react";
import Counter from "../components/Counter";
//상태를 조회하기위한 useSelector   dispatch를 위함   효율적인 리렌더링을 위한 shallowEqual
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//액션 생성함수를 불러와서 디스패치함
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector를이용해서 해당 state의 값들을 객체향태로 얻어 낸뒤 비구조 할당으로 값을 바로 조회가능하도록만듬
  const { number, diff } = useSelector(
    (state) => ({
      //useSelect를 사용해서 비효율적으로 리렌더링되고 있음이 감지 되었다 이럴때는 최척화를 위해 useSelect의 파라미터 equalityFn을 지정해준다.
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    //모든 요소들을 검사해서 맞는지 확인을 위해  shallowEqual을 추가해줌으로 아래의 코드를 대신한다
    // (left, right) => {
    //   return right.diff === left.diff && right.number === left.number;
    // }
    shallowEqual
  );
  const dispatch = useDispatch();

  //미리 만들어 놓은 액션생성 함수를 이용하여 디스패치
  // 호출되면 액션 객체가 만들어진다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  //이제 위에서 작업한 내용들을 Conter에 하나하나 잔달하면된다.
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
