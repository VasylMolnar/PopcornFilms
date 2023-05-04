import React from 'react';
import { Formik, FastField, ErrorMessage } from 'formik';
import { userLoginSchema } from '../utils/validationSchema';
import { useNavigate } from 'react-router';
import { useLogInMutation } from '../features/auth/authApiSlice';
import { Report, Loading } from 'notiflix';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fn Api
  const [logIn] = useLogInMutation();

  const handleLogIn = async values => {
    Loading.dots('Вхід у обліковий запис');

    const response = await logIn(values);

    if (response.data) {
      const accessToken = response.data.accessToken;
      // console.log(response);
      const userId = response.data.userId;
      const role = response.data.userRole;

      setTimeout(() => {
        setTimeout(() => {
          dispatch(setCredentials({ accessToken, userId, role }));
          Loading.remove();

          Report.success('Вітаємо.', 'Приємного користування 😀');
          navigate('/userPage');
        }, 500);
      }, 300);
    } else {
      Loading.remove();
      Report.failure(`CODE:${response.error.status}`, `${response.error.data.message}`);
    }
  };

  return (
    <main className="section login">
      <div className="container">
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogIn}
          validationSchema={userLoginSchema}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <h1 className="title">Вхід</h1>

              <label className="label">
                <p>Пошта</p>

                <FastField type="email" name="email" placeholder="Пошта:" />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: 'red', textTransform: 'upperCase' }}
                />
              </label>

              <label className="label">
                <p>Пароль</p>

                <FastField type="password" name="password" placeholder="Пароль:" />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: 'red', textTransform: 'upperCase' }}
                />
              </label>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Вхід
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Login;
