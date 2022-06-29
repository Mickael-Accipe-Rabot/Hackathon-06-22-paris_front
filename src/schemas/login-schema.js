import * as yup from "yup";

// Création du schema de validation
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Cet email est invalide")
    .required("l'email est obligatoire"),
  password: yup
    .string()
    .required("Mot de passe obligatoire")
    .min(3, "Votre mot de passe est trop court (min. 3 charactères)"),
});