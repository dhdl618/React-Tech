//prop Type 할당하는 구문
import Prop from 'prop-types';

//MyComponent 함수에 인자값을 할당하여 JSX 내부에서 prop 렌더링
const MyComponent = hello => {
    //name, children, favoriteNum 비구조화 할당하여 내부 값 추출
    const {name, children, favoriteNum} = hello;

    return (
    <div>
    나의 이름은 <b>{name}</b>입니다. <br />    
    children값은 {children}입니다. <br />
    제가 가장 좋아하는 숫자는 <b>{favoriteNum}</b>입니다.
    </div>
    );
};
    //prop의 기본 값 설정
    MyComponent.defaultProps = {name: '리액트'};

    //propType 지정 및 필수지정
    MyComponent.Prop = {
        name: Prop.string,
        favoriteNum: Prop.number.isRequired
    };

export default MyComponent;