import styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Paragraph: paragraph } = Typography;
const Paragraph = styled(paragraph)`
  margin-bottom: 10px;
  color: #171b1e;
  font-weight: 500;

  ${props =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `}
  ${props =>
    props.type === 'primary' &&
    css`
      color: #886cc0;
    `}
  ${props =>
    props.type === 'secondary' &&
    css`
      color: #717579;
    `}
  ${props =>
    props.type === 'blue' &&
    css`
      color: #000080;
    `}
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `}
  ${props =>
    props.type === 'destructive' &&
    css`
      color: #ef3e36;
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      &.ant-typography,
      .ant-typography p {
        margin-bottom: ${props.mb}px;
      }
    `}

  ${props =>
    props.ft === 'bold' &&
    css`
      &.ant-typography,
      .ant-typography p {
        font-family: Mardoto-Bold;
      }
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
    props.ft === 'medium' &&
    css`
      &.ant-typography,
      .ant-typography p {
        font-family: Mardoto-Medium;
      }
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}
  ${props =>
    props.td &&
    css`
      text-decoration: ${props.td};
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
    props.max_width &&
    css`
      max-width: ${props.max_width};
    `}
  ${props =>
    props.white_space &&
    css`
      white-space: ${props.white_space};
    `}
  ${props =>
    props.text_overflow &&
    css`
      text-overflow: ${props.text_overflow};
      overflow: hidden;
      white-space: nowrap;
      //display: block;
      //width: 100%;
      //white-space: nowrap;
      //overflow: hidden;
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
  ${props =>
    props.decoration &&
    css`
      text-decoration: ${props.decoration};
    `}
  ${props =>
    props.hover_color &&
    css`
      &:hover {
        color: ${props.hover_color};
      }
    `}
  ${props =>
    props.lh &&
    css`
      line-height: ${props.lh};
    `}
  ${props =>
    props.fz &&
    css`
      font-size: ${props.fz}px;
    `}
  ${props =>
    props.mob_fz &&
    css`
      @media screen and (max-width: 600px) {
        font-size: ${props.mob_fz}px;
      }
    `}
  ${props =>
    props.tab_fz &&
    css`
      @media screen and (max-width: 992px) {
        font-size: ${props.tab_fz}px;
      }
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${props =>
    props.vert_align &&
    css`
      display: flex;
      align-items: ${props.vert_align};
    `}
  ${props =>
    props.sectype === 'light' &&
    css`
      font-weight: 300;
    `}
`;

/** @component */
export default Paragraph;
