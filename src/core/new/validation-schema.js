import * as Yup from 'yup';



export const validationSchema = Yup.object({
  author: Yup.string().required(),
  quote: Yup.string().required().min(3)
});