import * as Yup from "yup";

export const nameValidation = Yup.string()
  .typeError("Awe Shoot!! We need a string here")
  .max(50, "Name must be at most 50 characters");

export const requiredNameValidation =
  nameValidation.required("Name is required");

export const speciesValidation = Yup.string().typeError(
  "Awe Shoot!! We need a string here"
);

export const genderValidation = Yup.string().typeError(
  "Awe Shoot!! We need a string here"
);

export const statusValidation = Yup.string().typeError(
  "Awe Shoot!! We need a string here"
);

export const characterTypeValidation = Yup.string()
  .typeError("Awe Shoot!! We need a string here")
  .max(50, "Type must be at most 50 characters");
