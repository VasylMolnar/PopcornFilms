import React from 'react';
import { Formik, FastField, ErrorMessage } from 'formik';
import { userLoginSchema } from '../utils/validationSchema';

const Login = () => {
  const handleLogIn = () => {};

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
