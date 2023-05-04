import { useState, React } from 'react';
import allowedRoles from '../../utils/roles_list';
import { Formik, FastField, ErrorMessage } from 'formik';
import { userRegisterSchema } from '../../utils/validationSchema';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  logOut,
  selectCurrentUserId,
  selectCurrentUserRole,
} from '../../features/auth/authSlice';
import { useGetUserByEmailQuery } from '../../features/users/userApiSlice';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Report, Loading, Notify } from 'notiflix';
import UsersList from './UsersList';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [canUpdate, setCanUpdate] = useState(false);

  //selector
  const userId = useSelector(selectCurrentUserId);
  const currentRole = useSelector(selectCurrentUserRole);

  //Get User Data by User Email
  const { data, isLoading, isSuccess, isError, error } = useGetUserByEmailQuery(userId);

  const handleChange = async values => {};

  const handleDelete = async () => {};

  const handleLogOut = async () => {
    dispatch(logOut());
    navigate('/');
    Notify.success('😀 До зустрічі');
  };

  const changeImage = async (e, folder) => {};

  return (
    <main className="section userPage">
      {isSuccess && (
        <div className="container">
          <div className="user_content">
            <div className="user">
              <Avatar
                className="img"
                //src={require('../../img/avatar.jpg')}
                src={data.imageUrl || require('../../img/avatar.jpg')}
                sx={{ width: 200, height: 200 }}
              />

              <p
                style={{
                  marginTop: '30px',
                  marginBottom: '30px',
                }}
              >
                {data.name} {data.surname}
              </p>

              <input
                className="custom-file-input"
                type="file"
                name="image"
                style={{ marginBottom: '10px' }}
                onChange={e => changeImage(e, 'Avatar')}
              />

              <button
                type="button"
                className="btn btn-outline-danger"
                style={{ width: '50%', marginBottom: '10px' }}
                onClick={handleLogOut}
              >
                Вийти
              </button>
            </div>

            <div className="userEdit">
              <Formik
                initialValues={{
                  name: data.name,
                  surname: data.surname,
                  email: data.email,
                  password: data.password || '*******',
                }} //select data from server
                onSubmit={handleChange}
                validationSchema={userRegisterSchema}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  isChanging,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit} className="edit_profile">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <h1 className="title">Редагувати профіль</h1>

                      <div>
                        <DriveFileRenameOutlineIcon
                          type="button"
                          onClick={() => setCanUpdate(!canUpdate)}
                          style={{ marginRight: '10px' }}
                        />

                        <DeleteForeverIcon type="button" onClick={handleDelete} />
                      </div>
                    </div>

                    <label className="label">
                      <AccountCircleIcon className="icon" />

                      <FastField type="text" name="name" placeholder="Імя:" />
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={{ color: 'red', textTransform: 'upperCase' }}
                      />
                    </label>

                    <label className="label">
                      <AccountCircleIcon className="icon" />

                      <FastField type="text" name="surname" placeholder="Імя:" />
                      <ErrorMessage
                        name="surname"
                        component="div"
                        style={{ color: 'red', textTransform: 'upperCase' }}
                      />
                    </label>

                    <label className="label">
                      <MailOutlineIcon className="icon" />

                      <FastField type="email" name="email" placeholder="Пошта:" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: 'red', textTransform: 'upperCase' }}
                      />
                    </label>

                    <label className="label">
                      <PasswordIcon className="icon" />

                      <FastField
                        type="password"
                        name="password"
                        placeholder="Пароль:"
                        onClick={() => setFieldValue('password', '')}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: 'red', textTransform: 'upperCase' }}
                      />
                    </label>

                    <button
                      className="btn btn-outline-danger"
                      type="submit"
                      disabled={!canUpdate}
                      style={{ width: '85%' }}
                    >
                      Змінити
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>

          {currentRole === 'ADMIN' && <UsersList />}
        </div>
      )}
      {isError && (Report.warning(`Увійдіть до свого обл. запису`, ''), navigate('/'))}
    </main>
  );
};

export default UserPage;
