import * as yup from 'yup';

export const customerPreferenceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
