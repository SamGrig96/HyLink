import styled, { css } from 'styled-components';
import { Upload as upload } from 'antd';

const Upload = styled(upload)`
  .ant-upload.ant-upload-select-picture-card {
    width: 100%;
    background: none;
    border: none;
  }
  .ant-upload-list-text .ant-upload-text-icon .anticon {
    display: none;
  }
  .ant-upload-picture-card-wrapper {
    display: inline-block;
    width: 100%;
    height: 100%;
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
    props.border &&
    css`
      border: ${props.border};
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
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.width &&
    css`
      .ant-upload {
        width: ${props.width};
      }
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${props =>
    props.text_color &&
    css`
      .ant-tooltip-inner {
        color: ${props.text_color};
      }
    `}
  ${props =>
    props.border_bot &&
    css`
      border-bottom: ${props.border_bot};
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
    props.text_width &&
    css`
      .ant-upload-list-text {
        width: ${props.text_width};
      }
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify};
    `}
`;

export default Upload;
