import React, { useCallback, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Image, Input, Spin } from 'antd';
import { Table } from '../atoms';
import useApiCall from '../../utils/hooks/useApiCall';
import { fetchNotificationsApi, fetchUserApi } from '../../services/users';
import client from '../../services/main-client';

const { Search } = Input;

const Users = () => {
  const [rowId, setRowId] = useState([]);
  const [dataFull, setData] = useState([]);
  const [notifications, notificationsLoading, notificationsCall] =
    useApiCall(fetchNotificationsApi);
  const [user, userLoading, userCall] = useApiCall(fetchUserApi);

  useEffect(() => {
    notificationsCall();
  }, []);

  const handleClick = useCallback(name => {
    userCall({ name });
  }, []);

  useEffect(() => {
    setData(
      notifications.map((item, index) => {
        return { ...item, key: `${index}` };
      })
    );
  }, [notifications]);

  const onSearch = value => {
    setRowId([]);
    if (value) {
      client()
        .get(`/users/${value}`)
        .then(res => {
          setData(
            [res.data].map((item, index) => {
              return { ...item, key: `${index}` };
            })
          );
        });
    } else {
      notificationsCall();
    }
  };
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
      },

      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: 'Repository',
        dataIndex: 'public_repos',
        key: 'public_repos',
      },
      {
        title: 'Followers',
        dataIndex: 'followers',
        key: 'followers',
      },
    ];

    return (
      <Spin spinning={userLoading}>
        <Table columns={columns} dataSource={[user]} pagination={false} />
      </Spin>
    );
  };
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar_url',
      key: 'avatar_url',
      render: row => <Image style={{ width: '60px', height: '60px' }} src={row} />,
    },
    {
      title: 'Username',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },

    {
      title: 'Options',
      key: 'operation',
      render: a => (
        <Button
          onClick={() => {
            if (rowId.includes(a.key)) {
              setRowId([]);
            } else {
              setRowId([`${a.key}`]);
            }
            handleClick(a.login);
          }}
        >
          Show More
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: '60px' }}>
      <Search
        placeholder='input search text'
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Spin spinning={notificationsLoading}>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            expandedRowKeys: [rowId[0]],
            expandIcon: () => null,
          }}
          dataSource={dataFull}
        />
      </Spin>
    </div>
  );
};
export default Users;
