import React from 'react';
import { useLazyGetUsersQuery } from '../../app/services/users';
import { Button } from '../../components/atoms';

const Dashboard = () => {
  const [trigger, { data, error, isLoading, isSuccess, isError }] = useLazyGetUsersQuery();

  return (
    <div className='App'>
      <Button onClick={() => trigger()}>Get Data</Button>
      {isLoading && 'Loading...'}
      {isError && error.error}
      {isSuccess && data && data.map((user, i) => <h1 key={user.id}>{user.ProjectName}</h1>)}
    </div>
  );
};

export default Dashboard;
