import * as yup from "yup";

async function bookValidation(data) {
  const schema = yup.object().shape({
    category: yup.array().required(),
    price: yup.number().required(),
    author: yup.string().required(),
    name: yup.string().required(),
  });

  return await schema.validate(data);
}

export default bookValidation;
