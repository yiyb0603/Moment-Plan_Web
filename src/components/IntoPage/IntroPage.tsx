import React from 'react';
import './IntroPage.scss';

const IntroPage = () => {
  return (
    <>
      <div className="IntroPage">
        <div className="IntroPage-First">
          <div className="IntroPage-First-Item">
            <div className="IntroPage-First-Item-Title">
              단순하고 간편하게 기획서를 만들고 공유해보세요
            </div>
            <div className="IntroPage-First-Item-Sub">
              자신만의 독특하고 멋진 기획서를 만들어보세요. 물론 협업툴로도
              사용가능하죠
            </div>
            <button className="IntroPage-First-Item-Start">시작하기</button>
          </div>
        </div>
        <div className="IntroPage-Second"></div>
        <div className="IntroPage-Third"></div>
        <div className="IntroPage-Fourth"></div>
      </div>
    </>
  );
};
export default IntroPage;
