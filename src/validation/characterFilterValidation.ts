import * as Yup from "yup";
import {
  characterTypeValidation,
  genderValidation,
  nameValidation,
  speciesValidation,
  statusValidation,
} from "./userValidation";
import { FilterCharacter } from "@/graphql/getCharacters";

const characterFilterValidation: Yup.ObjectSchema<FilterCharacter> =
  Yup.object().shape({
    name: nameValidation,
    species: speciesValidation,
    status: statusValidation,
    gender: genderValidation,
    type: characterTypeValidation,
  });

export default characterFilterValidation;
