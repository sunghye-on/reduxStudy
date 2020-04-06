import React from "react";
import Counter from "../components/Counter";
//상태를 조회하기위한 useSelector   dispatch를 위함
import { useSelector, useDispatch } from "react-redux";
//액션 생성함수를 불러와서 디스패치함
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector를이용해서 해당 state의 값들을 객체향태로 얻어 낸뒤 비구조 할당으로 값을 바로 조회가능하도록만듬
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
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
