import * as Yup from "yup";
import { STRING_TYPE_ERROR_MESSAGE } from "./validationErrorMessages";

export const nameValidation = Yup.string()
  .typeError(STRING_TYPE_ERROR_MESSAGE)
  .max(50, "Name must be at most 50 characters");

export const requiredNameValidation =
  nameValidation.required("Name is required");

export const speciesValidation = Yup.string().typeError(
  STRING_TYPE_ERROR_MESSAGE
);

export const genderValidation = Yup.string().typeError(
  STRING_TYPE_ERROR_MESSAGE
);

export const statusValidation = Yup.string().typeError(
  STRING_TYPE_ERROR_MESSAGE
);

export const characterTypeValidation = Yup.string()
  .typeError(STRING_TYPE_ERROR_MESSAGE)
  .max(50, "Type must be at most 50 characters");
