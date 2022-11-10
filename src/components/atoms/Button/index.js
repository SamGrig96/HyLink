import styled, { css } from 'styled-components';
import { Button as button } from 'antd';

const Button = styled(button)`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  height: 44px;
  border: none;
  font-weight: 550;
  color: #232d33;
  padding: 0 12px;
  font-size: 18px;
  border-radius: 8px;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  .ant-btn {
    padding: 0px !important;
  }
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
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize} !important;
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.ft === 'reguliar' &&
    css`
      &.ant-typography,
      .ant-typography p {
        font-family: Mardoto-Reguliar;
      }
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
    props.justify &&
    css`
      display: flex;
      align-items: center;
      justify-content: ${props.justify};
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.icon_height &&
    css`
      svg {
        height: ${props.icon_height};
      }
    `}
  ${props =>
    props.type === 'primary' &&
    css`
      font-weight: 500;
      font-size: 17px;
      color: black;
      border: none;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
      background: #ffffff;
      &:hover {
        background: #ffffff;
        color: #ff9900;
        border: none;
      }
      &:active {
        background: #ffffff;
        color: #ff9900;
        border: none;
      }
      &:focus {
        background: #ffffff;
        color: #ff9900;
        border: none;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
    `}

  ${props =>
    props.type === 'transparent' &&
    css`
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: grey;
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      //color: #ff9900;
      background: none;
      box-shadow: none;
      &:hover {
        background: #ffffff;
        color: grey;
        //border: none;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
      &:active {
        background: #ffffff;
        color: #ff9900;
        border: none;
      }
    `}
  ${props =>
    props.type === 'orange' &&
    css`
      color: #ffffff;
      background: #ff9900;

      &:hover {
        background: #ff9900;
        color: #fff;
      }

      &:active {
        background: #ff9900;
        color: #fff;
      }

      &:focus {
        background: #ff9900;
        color: #fff;
      }

      &[disabled] {
        background: #ff9900;
        color: #616161;
      }
    `}
  ${props =>
    props.type === 'grey' &&
    css`
      background: #c4c4c4;
      color: #fff;

      &:hover {
        background: #c4c4c4;
        color: #fff;
      }

      &:active {
        background: #c4c4c4;
        color: #fff;
      }

      &:focus {
        background: #c4c4c4;
        color: #fff;
      }

      &[disabled] {
        background: #c4c4c4;
        color: #616161;
      }
    `}
  ${props =>
    props.sectype === 'ghost' &&
    css`
      color: #ff9900;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #ff9900;
      }
      &:active {
        background: transparent;
        color: #ff9900;
      }
      &:focus {
        background: transparent;
        color: #ff9900;
      }
    `}
  ${props =>
    props.sectype === 'blue_ghost' &&
    css`
      color: #ff9900;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #ff9900;
      }
      &:active {
        background: transparent;
        color: #ff9900;
      }
      &:focus {
        background: transparent;
        color: #ff9900;
      }
    `}
  #C0C0C0

  ${props =>
    props.sectype === 'secondary' &&
    css`
      color: #717579;
      &:hover {
        color: #717579;
      }
      &:active {
        color: #717579;
      }
      &:focus {
        color: #717579;
      }
    `}
  ${props =>
    props.type === 'blue_outline' &&
    css`
      background: none;
      border: 1px solid #000080;
      color: #ff9900;
      &:hover {
        color: #ff9900;
        border-color: #ff9900;
      }
      &:active {
        color: #ff9900;
        border-color: #ff9900;
      }
      &:focus {
        color: #ff9900;
        border-color: #000080;
      }
    `}
  ${props =>
    props.type === 'outline' &&
    css`
      background: none;
      border: 1px solid ${props.bordercolor};
      //border-radius: 50px;
      color: #886cc0;
      &:hover {
        color: #6138fb;
        border-color: #6138fb;
      }
      &:active {
        color: #886cc0;
        border-color: #886cc0;
      }
      &:focus {
        color: #886cc0;
        border-color: #886cc0;
      }
    `}
  ${props =>
    props.type === 'dark_outline' &&
    css`
      background: #fff;
      border: 1px solid #eeeeee;
      //border-radius: 10px;
      color: #171b1e;
      box-shadow: none;
      &:hover {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:active {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:focus {
        color: #171b1e;
        border-color: #171b1e;
      }
    `}
  ${props =>
    props.type === 'black_outline' &&
    css`
      background: #fff;
      border: 1px solid #171b1e;
      color: #171b1e;
      box-shadow: none;
      &:hover {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:active {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:focus {
        color: #171b1e;
        border-color: #171b1e;
      }
    `}
  ${props =>
    props.type === 'destructive' &&
    css`
      background: #f8817b;
      border: 1px solid #f8817b;
      //border-radius: 10px;
      color: #fff;
      box-shadow: none;
      &:hover {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:active {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:focus {
        color: #ff4f46;
        border-color: #ff4f46;
      }
    `}
  ${props =>
    props.type === 'grey_destructive' &&
    css`
      border: 1px solid #c4c4c4;
      box-shadow: none;
      color: #ff2222;
      background: #c4c4c4;
      &:hover {
        color: #ff2222;
        background: #c4c4c4;
        border: 1px solid #c4c4c4;
      }
      &:active {
        color: #ff2222;
        background: #c4c4c4;
        border: 1px solid #c4c4c4;
      }
      &:focus {
        color: #ff2222;
        background: #c4c4c4;
        border: 1px solid #c4c4c4;
      }
    `}
  ${props =>
    props.type === 'destructive_outline' &&
    css`
      background: #fff;
      border: 1px solid #f8817b;
      //border-radius: 10px;
      color: #f8817b;
      box-shadow: none;
      &:hover {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:active {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:focus {
        color: #ff4f46;
        border-color: #ff4f46;
      }
    `}
  ${props =>
    props.type === 'grey_ghost' &&
    css`
      color: #717579;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #717579;
      }
      &:active {
        background: transparent;
        color: #717579;
      }
      &:focus {
        background: transparent;
        color: #717579;
      }
    `}
  ${props =>
    props.type === 'dark_ghost' &&
    css`
      color: #171b1e;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #171b1e;
      }
      &:active {
        background: transparent;
        color: #171b1e;
      }
      &:focus {
        background: transparent;
        color: #171b1e;
      }
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
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.align &&
    css`
      display: flex;
      align-items: ${props.align};
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify};
    `}
  ${props =>
    props.line_height &&
    css`
      line-height: ${props.line_height};
    `}
`;

export default Button;
