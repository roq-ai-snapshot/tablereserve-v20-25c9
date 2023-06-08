import * as yup from 'yup';
import { tableLayoutValidationSchema } from 'validationSchema/table-layouts';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable().required(),
  table_layout: yup.array().of(tableLayoutValidationSchema),
});
