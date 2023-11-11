import * as yup from "yup";

export default yup.object().shape({
    username: yup
        .string()
        .required()
        .max(255, "Must be a maximum of 255 characters"),
    password: yup.string().required(),
});
