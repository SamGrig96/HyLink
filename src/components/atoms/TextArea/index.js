import styled, { css } from 'styled-components';
import { Input } from 'antd';

const TextArea = styled(Input.TextArea)`
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  padding: 15px;
  min-height: 0px;
  font-weight: 300;

  &:hover {
    border-color: orange;
  }
  &:focus,
  &.ant-input-focused {
    border-color: orange;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px #886cc02e;
  }
  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${props =>
    props.type === 'blue' &&
    css`
      border: 1px solid #000080;
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.min_height &&
    css`
      min-height: ${props.min_height};
    `}
  ${props =>
    props.max_height &&
    css`
      max-height: ${props.max_height};
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
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
`;

export default TextArea;
