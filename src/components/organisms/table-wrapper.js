import React, { useEffect, useState } from 'react';
import { Table } from '../atoms';

const defPaginationData = { size: 8, number: 1 };

const checkSorter = (cols = [], data = []) =>
  cols.map(el => ({
    ...el,
    sorter: data.length ? el?.sorter : false,
  }));

const TableWrapper = ({
  testex = {},
  columns = [],
  loading = false,
  total = 0,
  dataSource = [],
  tableExtraProps = {},
  filterContent = '',
  test = [],
  filterData = {},
  getTableData = () => {},
  triggerRequest = false,
  isLocalSort = false,
  scrollWidth = 0,
  expandable = {},
}) => {
  const [paginationData, setPaginationData] = useState(defPaginationData);
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    checkSorter();
  }, [dataSource]);

  useEffect(() => {
    convertedRequest();
  }, [paginationData, sortData]);

  const convertedRequest = () => {
    let params = {};

    const { size, number } = paginationData;

    params = {
      PageSize: size,
      PageIndex: number,
    };

    getTableData(params);
  };

  const handleSortChange = data => {
    !isLocalSort && setSortData(data.length ? data : [data]);
  };

  return (
    <>
      {filterContent}
      <Table
        columns={checkSorter(columns, dataSource)}
        extra='pagination'
        onChange={(a, b, data) => handleSortChange(data)}
        // expand_back='#fff'
        expandable={expandable}
        // rowKey={record => record.id}
        loading={loading}
        bordered={false}
        scroll={{ x: scrollWidth }}
        cell_padding='5px 42px'
        pagination={{
          position: ['bottomCenter'],
          defaultPageSize: 8,
          showSizeChanger: false,
          pageSize: paginationData.size,
          hideOnSinglePage: !dataSource.length,
          current: paginationData.number,
          onChange: (page, size) => setPaginationData({ size, number: page }),
          total: dataSource.length ? total : 0,
        }}
        dataSource={dataSource}
        {...tableExtraProps}
      />
    </>
  );
};

export default TableWrapper;
