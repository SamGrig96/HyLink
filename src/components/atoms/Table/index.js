import styled, { css } from 'styled-components';
import { Table as table } from 'antd';

const Table = styled(table)`
  & .ant-table-cell {
    padding: 5px;
    font-size: 18px;
    font-family: Mardoto-Reguliar;
    color: #4d4d4d;
    height: 75px;
  }
  .ant-table {
    margin: '20px;

  }

  .ant-table-title {
    //border-bottom: 1px solid #e8eef4;
  }
  .ant-table-thead {
    //height: 75px;
    background-color: #f4f4f4 !important;
    .ant-table-cell {
      border: none;
      padding: 25px 42px !important;
    }

    > tr > th {
      font-weight: 700;
      font-size: 18px;
      color: #171b1e;
    }
  }
  .ant-card-body {
    width: max-content;
  }
  &.ant-table-wrapper {
    box-shadow: 0 0 40.9px 5.1px rgba(0, 0, 0, 0.13);
    border-radius: 8px;
    padding: 0 1px;
    margin-top: 35px;
  }
  & .ant-tag {
    border: none !important;
    background: none !important;
    font-size: 16px;
    font-weight: 700;
    padding: 0px;
  }
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.colswidth &&
    css`
      th {
        width: ${props.colswidth};
      }
    `}
  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
  ${props =>
    props.row &&
    css`
      .ant-table-cell {
        width: ${props.row};
      }
    `}
  ${props =>
    props.headcolor &&
    css`
      .ant-table-thead > tr > th {
        color: ${props.headcolor};
      }
    `}
  ${props =>
    props.headerbackcolor &&
    css`
      .ant-table-thead > tr > th {
        //background-color: ${props.headerbackcolor};
      }
    `}
  ${props =>
    props.footerbackcolor &&
    css`
      .ant-table-footer {
        //background-color: ${props.footerbackcolor};
      }
    `}
  ${props =>
    props.expand_back &&
    css`
      .ant-table-expanded-row .ant-table-cell {
        background-color: ${props.expand_back};
      }
    `}
  ${props =>
    props.footertopborder &&
    css`
      .ant-table-footer {
        border-top: ${props.footertopborder} !important;
      }
    `}
  ${props =>
    props.footerpadding &&
    css`
      .ant-table-footer {
        padding: ${props.footerpadding} !important;
      }
    `}
  ${props =>
    props.cell_padding &&
    css`
      .ant-table-cell {
        padding: ${props.cell_padding} !important;
      }
    `}
  ${props =>
    props.bodycolor &&
    css`
      .ant-table-tbody > tr td {
        color: ${props.bodycolor};
      }
    `}
  ${props =>
    props.bodyweight &&
    css`
      .ant-table-tbody > tr td {
        font-weight: ${props.bodyweight};
      }
    `}
  ${props =>
    props.hide === 'body' &&
    css`
      .ant-table-tbody {
        display: none;
      }

      .ant-table,
      .ant-table-container {
        border-bottom: none;
      }

      .ant-table-thead > tr > th {
        border-bottom: none;
      }
    `}
  ${props =>
    props.extra === 'pagination' &&
    css`
      .ant-pagination-total-text {
        margin-right: auto;
      }

      .ant-pagination-item {
        background-color: #f1eaff !important;
        border: 1px solid #f77424 !important;

        a {
          color: #f77424;
        }

        &:hover,
        &.ant-pagination-item-active {
          background-color: #f77424 !important;

          a {
            color: #fff;
          }
        }
      }

      .ant-pagination-item-ellipsis,
      .ant-pagination-item-link-icon {
        color: #f77424 !important;
      }

      .ant-pagination-prev,
      .ant-pagination-next {
        button {
          background-color: transparent;
          //border-radius: 50%;
          border: 1px solid #f77424;
          color: #f77424;
        }

        &.ant-pagination-disabled,
        &.ant-pagination-disabled:hover {
          button {
            color: rgba(0, 0, 0, 0.25);
            border-color: #d9d9d9;
            background-color: transparent;
          }
        }

        &:hover {
          button {
            background-color: #f77424;
            //border-radius: 50%;
            border-color: #f77424;
            color: #fff;
          }
        }
      }
    `}
  ${props =>
    props.pagination_margin &&
    css`
      .ant-pagination {
        margin: ${props.pagination_margin};
      }
    `}
  ${props =>
    props.pagination_padding &&
    css`
      .ant-pagination {
        padding: ${props.pagination_padding};
      }
    `}
  ${props =>
    props.rowHeight &&
    css`
      .ant-table-thead > tr {
        height: ${props.rowHeight}px;
      }
    `}
  ${props =>
    props.flex === 'contents' &&
    css`
      .ant-table-thead > tr {
        display: contents;
      }
    `}
  ${props =>
    props.odd_row_color &&
    css`
      .ant-table-tbody .ant-table-row {
        &:nth-child(odd) {
          //background-color: ${props.odd_row_color};
          border: 1px solid red;
        }
      }
    `}

  ${props =>
    props.double_exp_row_color &&
    css`
      .ant-table-tbody {
        .ant-table-row {
          &:nth-child(4n),
          &:nth-child(4n-1) {
            background: #fff;
          }

          &:nth-child(4n-2),
          &:nth-child(4n-3) {
            //background: ${props.double_exp_row_color};
          }
        }
        .ant-table-expanded-row {
          &:nth-child(4n),
          &:nth-child(4n-1) {
            td {
              //background: ${props.double_exp_row_color};
            }
          }

          &:nth-child(4n-2),
          &:nth-child(4n-3) {
            td {
              background: #fff;
            }
          }
        }
      }
    `}
  ${props =>
    props.flex === 'contents-none' &&
    css`
      .ant-table-thead > tr > .ant-table-cell {
        padding: 11px 16px;
      }
    `}
  ${props =>
    props.expand_pos &&
    css`
      .ant-table-row-expand-icon {
        float: ${props.expand_pos};
      }
    `}
  ${props =>
    props.append_cell_back &&
    css`
      .ant-table-row-level-0 > .ant-table-cell-with-append {
        background-color: ${props.append_cell_back};
      }
    `}
  ${props =>
    props.expanded_row_extras_display &&
    css`
      .ant-table-row-level-1 > .ant-table-cell-with-append {
        .ant-table-row-expand-icon,
        .ant-table-row-indent {
          display: ${props.expanded_row_extras_display};
        }
      }
    `}
  ${props =>
    props.head_fw &&
    css`
      .ant-table-thead > tr > th {
        font-weight: ${props.head_fw};
      }
    `}
  ${props =>
    props.x_overflow &&
    css`
      .ant-table-body {
        overflow-x: ${props.x_overflow};
      }
    `}
  ${props =>
    props.y_overflow &&
    css`
      .ant-table-body {
        overflow-y: ${props.y_overflow}!important;
      }
    `}
  ${props =>
    props.height &&
    css`
      .ant-table-body {
        height: ${props.height}px;
      }
    `}
`;

export default Table;
