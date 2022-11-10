import styled, { css } from 'styled-components';
import { DatePicker as datepicker } from 'antd';

const DatePicker = styled(datepicker)`
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  height: 57px;
  padding: 0 25px;
  font-weight: 300;
  & .ant-picker-datetime-panel {
    display: flex;
    flex-direction: column !important;
  }
  &:hover {
    border-color: #f77424;
  }
  &:focus,
  &.ant-input-focused {
    border-color: #f77424;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px #886cc02e;
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
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
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
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
`;

export default DatePicker;
