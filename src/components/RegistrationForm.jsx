import { Box, Button } from "@mui/material";

import { Formik, Form } from "formik";
import * as yup from "yup";

function RegistrationForm() {

    const initialValues = {};
    const validationSchema = yup.object({});
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
                            <Button type="submit" variant="contained" disableElevation>Submit</Button>
                        </Form>
                    )
                }
            </Formik>
        </Box>
    )
}

export default RegistrationForm;