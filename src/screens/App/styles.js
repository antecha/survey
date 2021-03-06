import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
`;

export const StyledHeader = styled(Layout.Header)`
  background: #fff;
  padding: 0;
`;

export const StyledContent = styled(Layout.Content)`
  margin: 24px 16px;
  padding: 40px;
  background: #fff;
  min-height: 280px;
`;
