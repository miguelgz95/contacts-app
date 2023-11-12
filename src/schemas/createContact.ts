import * as yup from "yup";

export default yup.object().shape({
    image: yup
        .string()
        .default("https://www.w3schools.com/w3images/avatar2.png"),
    firstName: yup.string().required("Campo requerido").default(""),
    lastName: yup.string().required("Campo requerido").default(""),
    email: yup.string().email().required("Campo requerido").default(""),
    phone: yup.string().required("Campo requerido").default(""),
});
