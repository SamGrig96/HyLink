import styled, { css } from 'styled-components';
import { Radio as radio } from 'antd';

const Radio = styled(radio)`
  font-family: Mardoto-Reguliar;
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
    props.back_color &&
    css`
      & .ant-radio-checked .ant-radio-inner {
        border: 1px solid ${props.back_color};
      }
      & .ant-radio-inner:after {
        background-color: ${props.back_color};
      }
    `}
`;

export default Radio;
