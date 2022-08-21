import * as yup from "yup";

export const validationSchema = yup.object({
    name: yup.string().required("Required"),
    sex: yup.string().required("Required"),
    birthDate: yup.date().required("Required").nullable()
});