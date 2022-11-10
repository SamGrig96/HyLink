import styled, { css } from 'styled-components';
import { Col as col } from 'antd';

const Col = styled(col)`
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
      margin-top: ${props.mt}px;
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.width &&
    css`
      min-width: ${props.width};
    `}
  ${props =>
    props.max_height &&
    css`
      max-height: ${props.max_height};
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
    props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction};
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.border_right &&
    css`
      border-right: ${props.border_right};
    `}
  ${props =>
    props.border_top &&
    css`
      border-top: ${props.border_top};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.overflow_y &&
    css`
      overflow-y: ${props.overflow_y};
    `}
  ${props =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  ${props =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
`;

/** @component */
export default Col;
