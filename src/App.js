import './index.scss';
import {Formik, Form, Field} from 'formik';
import React from 'react';

const validateEmail = (value) => {
  if(!value) {
    return 'Укажите E-Mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Неверный адрес электронной почты';
  };
};

const validateFullName = (value) => {
  if(!value) {
    return 'Укажите полное имя';
  };
};

const validatePassword = (value) => {
  if(!value) {
    return 'Укажите пароль';
  };
};

function App() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const visiblePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="App">
      <div className="banner">
        <div className="banner__inner">
          <img src="/chat.png" />
          <h2>
            Общайся с друзьями
          </h2>
          <p>
            Быстрый и удобный чат для общения с друзьями или коолегами по работе
          </p>
        </div>
      </div>
        <div className="form">
          <div className="form__content">
            <h2>
              Регистрация
            </h2>
            <p>
              Для того, чтобы войти в чат, необходимо произвести авторизоваться
            </p>
          <Formik 
              initialValues={{
                email: '',
                fullName: '',
                password: '',
              }}
              onSubmit={values => {
                console.log('Submit', values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={`form__field ${errors.email && touched.email ? 'error': ''}`}>
                  <Field 
                    type="text" 
                    name="email" 
                    placeholder="E-Mail"
                    validate={validateEmail} 
                  />
                  {!errors.email && touched.email ? (
                  <svg className="check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z" />
                  </svg>
                  ) : ''}
                  {errors.email && touched.email && (
                    <span className='error'>{errors.email}</span>
                  )}
                </div>
                <div className={`form__field ${errors.fullName && touched.fullName ? 'error': ''}`}>
                  <Field 
                    type="text" 
                    name="fullName" 
                    placeholder="Полное имя" 
                    validate={validateFullName}
                  />
                  {!errors.fullName && touched.fullName ? (
                  <svg className="check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z" />
                  </svg>
                  ) : ''}
                  {errors.fullName && touched.fullName && (
                    <span className='error'>{errors.fullName}</span>
                  )}
                </div>
                <div className={`form__field ${errors.password && touched.password ? 'error': ''}`}>
                  <Field 
                    type={passwordVisible ? 'text' : 'password'}
                    name="password" 
                    placeholder="Пароль"
                    validate={validatePassword} 
                  />
                  {passwordVisible === true ? (
                  <svg 
                    width="24px" 
                    height="24px" 
                    viewBox="0 0 24 24" 
                    version="1.1" 
                    fill="#969699" 
                    onClick={visiblePassword}
                    className="eye-active"
                  >
                  <g id="Output-temp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="temp" transform="translate(-991.000000, -105.000000)" fill="#B8BDBF">
                      <path d="M1003,112 C1005.76,112 1008,114.24 1008,117 C1008,117.65 1007.87,118.26 1007.64,118.83 L1010.56,121.75 C1012.07,120.49 1013.26,118.86 1013.99,117 C1012.26,112.61 1007.99,109.5 1002.99,109.5 C1001.59,109.5 1000.25,109.75 999.01,110.2 L1001.17,112.36 C1001.74,112.13 1002.35,112 1003,112 L1003,112 Z M993,109.27 L995.28,111.55 L995.74,112.01 C994.08,113.3 992.78,115.02 992,117 C993.73,121.39 998,124.5 1003,124.5 C1004.55,124.5 1006.03,124.2 1007.38,123.66 L1007.8,124.08 L1010.73,127 L1012,125.73 L994.27,108 L993,109.27 L993,109.27 Z M998.53,114.8 L1000.08,116.35 C1000.03,116.56 1000,116.78 1000,117 C1000,118.66 1001.34,120 1003,120 C1003.22,120 1003.44,119.97 1003.65,119.92 L1005.2,121.47 C1004.53,121.8 1003.79,122 1003,122 C1000.24,122 998,119.76 998,117 C998,116.21 998.2,115.47 998.53,114.8 L998.53,114.8 Z M1002.84,114.02 L1005.99,117.17 L1006.01,117.01 C1006.01,115.35 1004.67,114.01 1003.01,114.01 L1002.84,114.02 L1002.84,114.02 Z" id="path">
                      </path>
                    </g>
                  </g>
                </svg>) : (
                  <svg 
                    className="eye" 
                    height="24px" 
                    viewBox="0 0 24 24" 
                    width="24px"
                    onClick={visiblePassword}
                  >
                    <path d="M21.821,12.43c-0.083-0.119-2.062-2.944-4.793-4.875C15.612,6.552,13.826,6,12,6c-1.825,0-3.611,0.552-5.03,1.555  c-2.731,1.931-4.708,4.756-4.791,4.875c-0.238,0.343-0.238,0.798,0,1.141c0.083,0.119,2.06,2.944,4.791,4.875  C8.389,19.448,10.175,20,12,20c1.826,0,3.612-0.552,5.028-1.555c2.731-1.931,4.71-4.756,4.793-4.875  C22.06,13.228,22.06,12.772,21.821,12.43z M12,16.5c-1.934,0-3.5-1.57-3.5-3.5c0-1.934,1.566-3.5,3.5-3.5c1.93,0,3.5,1.566,3.5,3.5  C15.5,14.93,13.93,16.5,12,16.5z" />
                    <g>
                      <path d="M14,13c0,1.102-0.898,2-2,2c-1.105,0-2-0.898-2-2c0-1.105,0.895-2,2-2C13.102,11,14,11.895,14,13z" />
                    </g>
                  </svg>
                  )}
                  {errors.password && touched.password && (
                    <span className='error'>{errors.password}</span>
                  )}
                </div>
                <div className="form__additional">
                  <div>
                    <input class="styled-checkbox" id="checkbox" type="checkbox" value="value1" />
                    <label for="checkbox">Запомнить</label>
                  </div>
                  <a href='/'>Забыл пароль?</a>
                </div>
                <button onClick={() => {window.location.reload();}} type="submit">Войти</button>
              </Form>
            )}
          </Formik>
          </div>
        </div>
    </div>
  );
}

export default App;
