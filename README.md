# redux Study



## test.js

가장 기본적인 reducer를 생성하는 구조로 액션타입을 지정 및 만들어 리듀서를 생성하여 해당 리듀서를 createStore호출하여 store를 생성한다. 이후 store구독을 위한 listener함수를 생성하여 그독함수호출시에 넣어준다. 마지막으로 구독한 store의 특정액션을 실행시켜주기위한 dispatch함수를 이용한다.