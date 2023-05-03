import React from 'react';
import { userRegisterSchema } from '../utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import { Formik, FastField, ErrorMessage } from 'formik';
import { Report, Loading } from 'notiflix';
import { useRegisterMutation } from '../features/auth/authApiSlice';

const Register = () => {
  const navigate = useNavigate();

  //fn API
  const [register] = useRegisterMutation();

  const handleRegister = async values => {
    Loading.dots('');
    console.log(values);
    try {
      await register(values);
      Loading.remove();
      //Report.success('Реєстрація успішна.', 'Можете увійти до свого обл. запису');
    } catch (e) {
      console.log(e);
      Loading.remove();
      Report.failure(`Реєстрація невдала.`, `${e}`);
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
