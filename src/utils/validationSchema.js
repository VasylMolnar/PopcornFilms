import * as yup from 'yup';

export const userLoginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const userRegisterSchema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(12),
});
