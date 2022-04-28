import React, { Component } from 'react';
//MyComponent 컴포넌트를 import하여 App에서 사용
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const name = '리액트';
    return (
      <div className='name'>
        <b>{name === '리액트' ? `이름은 ${name} 입니다.` : `이름이 ${name}이 아닙니다.`}</b>
        
        {/* MyComponent의 prop값 지정 및 태그 사이의 내용을 보여주는 children, 
        isRequired가 설정된 favoriteNum prop을 설정한 모습 */}
        <MyComponent name="박준규" favoriteNum={960725}><b>칠드런</b></MyComponent>
      </div>
    );
  }
}

export default App;   