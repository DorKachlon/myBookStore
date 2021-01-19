import * as yup from "yup";

export default async function bookValidation(data) {
  const schema = yup.object().shape({
    category: yup.array().required(),
    price: yup.number().required(),
    author: yup.string().required(),
    name: yup.string().required(),
  });

  return await schema.validate(data);
}

export async function bookValidationUpdate(data) {
  const schema = yup.object().shape({
    category: yup.array(),
    price: yup.number(),
    author: yup.string(),
    name: yup.string(),
  });

  return await schema.validate(data);
}
