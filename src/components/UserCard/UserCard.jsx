import React from 'react';
import { useDeleteUserMutation } from '../../features/users/userApiSlice';
import { Avatar, Card } from 'antd';
import { Loading, Report } from 'notiflix';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router';
const { Meta } = Card;

let UserCard = ({ item }) => {
  const navigate = useNavigate();

  //Api fn
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async userId => {
    Loading.dots('Видалення користувача ... ');

    const confirmDelete = window.confirm('Підтвердити видалення.');

    if (confirmDelete) {
      await deleteUser({ userId })
        .then(data => {
          Loading.remove();
          Report.success('Користувача було видалено', '');
        })
        .catch(error => {
          Loading.remove();
          Report.failure(error || 'Помилка видалення', '');
        });
    } else {
      Loading.remove();
      Report.info('Видалення скасовано', '');
    }
  };

  return (
    <Card
      id="ant_card"
      style={{ width: '290px' }}
      cover={<img className="img" alt="example" src={require('../../img/avatar.jpg')} />}
      actions={[
        <AddCircleOutlineIcon key="setting" onClick={() => navigate('/register')} />,
        <DeleteForeverIcon key="ellipsis" onClick={() => handleDelete(item.id)} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={item.name}
        description={item.email}
      />
    </Card>
  );
};

UserCard = React.memo(UserCard);
export default UserCard;
