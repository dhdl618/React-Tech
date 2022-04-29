import React, { Component } from 'react';

//클래스형 컴포넌트에 state를 설정할 때는 construct 메서드를 작성하여 설정하고
//반드시 super(props)를 호출해야 함 > 그래야만 this 사용이 가능 (JS 제약).
class Counter extends Component {
    constructor(props) {
        super(props);
        //state 값은 객체형식으로 설정 (초깃값)
        this.state = {
            number : 0,
            fixedNum : 980618,
            resetCount : 0
        };
    }

    /* 위 코드와 같은 클래스 (construct 생략) - 요즘 트렌드
    class Counter extends Component {
        state = {
            number: 0,
            fixedNum: 0,
            resetCount: 0
        };
    }
     */

    render() {
        //this를 이용하여 state 값 조회
        const {number, fixedNum, resetCount} = this.state;

        return (
            <div>
            <h2>증가 or 감소 숫자 : {number}</h2>
            <h2>바뀌지 않는 값 : {fixedNum}</h2>
            <h2>리셋 버튼을 누른 횟수 : {resetCount}</h2>

            {/*버튼 클릭시 setState 메서드 호출하여 값 변경*/}
            <button onClick={() => {
                this.setState({number: number+1},
                    //setState의 두번 째 파라미터로 콜백함수를 등록하여 작업 처리
                    console.log("방금 setState가 호출되어 값이 1 증가하였습니다."));
            }}
            >+1</button>
            
            <button onClick={() => {
                this.setState({number: number-1},
                    console.log("방금 setState가 호출되어 값이 1 감소하였습니다."));
            }}
            >-1</button>

            <button onClick={() => {
                this.setState({number: 0, resetCount: resetCount + 1},
                    console.log("방금 setState가 호출되어 값이 리셋되었습니다."));
            }}
            >reset</button>
            </div>
        );
    }
}

export default Counter;