import React from 'react';
import { useGetAllUsersQuery } from '../../features/users/userApiSlice';
import { Report, Loading } from 'notiflix';
import UserCard from '../../components/UserCard/UserCard';

const UsersList = () => {
  //for admin page User list

  //fetch Users data
  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery();

  return (
    <main className="section userList">
      <h1 className="title" style={{ marginTop: '10px', paddingBottom: '10px' }}>
        Список Користувачів
      </h1>
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      <div className="userList_cards">
        {isSuccess &&
          !isError &&
          data.map(item => <UserCard item={item} key={item.id} />)}
      </div>
    </main>
  );
};

export default UsersList;
