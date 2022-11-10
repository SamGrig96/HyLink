import styled, { css } from 'styled-components';
import { Select as select } from 'antd';

const Select = styled(select)`
  width: 100%;
  border-radius: 20px;
  .ant-select-selection-item {
    line-height: 50px !important;
    font-size: 15px;
    top: 5px;
  }
  }
  .ant-select-selector {
    background: #fff !important;
    border: 1px solid #eeeeee !important;
    box-sizing: border-box;
    height: 40px !important;
    font-weight: 300;
    padding: 12px 12px !important;
    display: flex;
    align-items: center;
    line-height: 50px !important;
    border-radius: 7px !important;
  }
  //
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

  &.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: #00000096;
  }
  ${props =>
    props.type === 'blue' &&
    css`
      .ant-select-selector {
        border: 1px solid #000080;
      }
      .ant-select-arrow {
        color: #000080;
      }
    `}
  ${props =>
    props.mode === 'multiple' &&
    css`
      .ant-select-selector {
        padding: 0 5px;
      }
    `}
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
      .ant-select-selector {
        padding: ${props.padding};
      }
    `}
  ${props =>
    props.max_width &&
    css`
      max-width: ${props.max_width};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.min_width &&
    css`
      min-width: ${props.min_width};
    `}
  ${props =>
    props.height &&
    css`
      .ant-select-selector {
        height: ${props.height};
      }
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.fw &&
    css`
      .ant-select-selection-item {
        font-weight: ${props.fw};
      }
    `}
  ${props =>
    props.back_color &&
    css`
      .ant-select-selector {
        background-color: ${props.back_color};
      }
    `}
`;

export default Select;
