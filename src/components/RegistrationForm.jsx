import { Box, Button } from "@mui/material";

import { Formik, Form } from "formik";
import * as yup from "yup";

import FormikController from "./FormikController";

function RegistrationForm() {

    const sexOptions = [
        { key: "Enter sex", value: "" },
        { key: "Male", value: "male" },
        { key: "Female", value: "female" },
    ]

    const initialValues = {
        name: "",
        sex: "",
        birthDate: null
    };

    const validationSchema = yup.object({
        name: yup.string().required("Required"),
        sex: yup.string().required("Required"),
        birthDate: yup.date().required("Required").nullable()
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form>
                            <FormikController
                                control="input"
                                type="text"
                                label="Name*"
                                placeholder="Username"
                                name="name"
                            />
                            <FormikController
                                control="select"
                                label="Sex*"
                                name="sex"
                                options={sexOptions}
                            />
                            <FormikController
                                control="date"
                                label="Date of Birth or Age*"
                                placeholder="MM/DD/YYYY"
                                name="birthDate"
                            />
                            <Button type="submit" variant="contained" disableElevation>Submit</Button>
                        </Form>
                    )
                }
            </Formik>
        </Box>
    )
}

export default RegistrationForm;