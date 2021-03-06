import React from 'react';
import { CountDown, WhiteSpace, WingBlank } from '@td-design/react-native';
import Container from '../components/Container';

export default () => {
  return (
    <Container>
      <WingBlank>
        {/* 默认配置 */}
        {/* <InputItem label="手机号" placeholder="请输入手机号" value={value} onChange={setValue} />
      <CountDown onClick={() => {console.log('222')}} onEnd={() => console.log('倒计时结束')} /> */}

        {/* 配置codeType */}
        <WhiteSpace />
        <CountDown
          codeType="border"
          onClick={() => {
            console.log('222');
          }}
          onEnd={() => console.log('倒计时结束')}
        />
        <WhiteSpace />
        <CountDown
          bordered
          onClick={() => {
            console.log('222');
          }}
          onEnd={() => console.log('倒计时结束')}
        />
      </WingBlank>
    </Container>
  );
};
