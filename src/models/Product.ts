import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  image: string,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  image: Yup.string(),
  price: Yup.number().required(),
});
