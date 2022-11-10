import styled, { css } from 'styled-components';
import { Input } from 'antd';

const InputPassword = styled(Input.Password)`
  background: #fff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  height: 44px;
  //padding: 0 15px;
  font-weight: 300;
  border-radius: 8px;

  //&:hover {
  //  border-color: #886cc0;
  //}
  //&:focus,
  //&.ant-input-focused {
  //  border-color: #886cc0;
  //  border-right-width: 1px !important;
  //  outline: 0;
  //  box-shadow: 0 0 0 2px #886cc02e;
  //}

  &:hover {
    border-color: transparent;
  }
  &:focus,
  &.ant-input-focused {
    border-color: transparent;
    border-right-width: 1px !important;
    //outline: 0;
    box-shadow: 0 0 0 2px #886cc02e;
  }

  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
`;

export default InputPassword;
