import React from 'react';
import { userRegisterSchema } from '../utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import { Formik, FastField, ErrorMessage } from 'formik';
import { Report, Loading } from 'notiflix';
import { useRegisterMutation } from '../features/auth/authApiSlice';
import { useSelector } from 'react-redux';

const Register = () => {
  const navigate = useNavigate();
  const role = useSelector(state => state.auth.role);

  //fn API
  const [register] = useRegisterMutation();

  const handleRegister = async values => {
    Loading.dots('Реєстрація');

    const response = await register(values);

    if (
      response.error.status === 201 ||
      response.error.status === 200 ||
      response.error.status === 'PARSING_ERROR'
    ) {
      setTimeout(() => {
        Loading.remove();

        Report.success('Реєстрація успішна.', 'Можете увійти до свого обл. запису');
        role === 'Admin' ? navigate('/userPage') : navigate('/login');
      }, 500);
    } else {
      Loading.remove();
      Report.failure(
        `Реєстрація невдала! CODE:${response.error.status}`,
        `${response.error.data.message}`
      );
    }
  };

  return (
    <main className="section register">
      <div className="container">
        <Formik
          initialValues={{
            name: '',
            surname: '',
            description: 'Hello',
            email: '',
            password: '',
          }}
          onSubmit={handleRegister}
          validationSchema={userRegisterSchema}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <h1 className="title">Реєстрація</h1>

              <label className="label">
                <p>Ваше імя</p>

                <FastField type="text" name="name" placeholder="Ваше імя:" />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: 'red', textTransform: 'upperCase' }}
                />
              </label>

              <label className="label">
                <p>Ваше прізвіще</p>

                <FastField type="text" name="surname" placeholder="Ваше прізвіще:" />
                <ErrorMessage
                  name="surname"
                  component="div"
                  style={{ color: 'red', textTransform: 'upperCase' }}
                />
              </label>

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
                  Зареєструватися
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Register;
