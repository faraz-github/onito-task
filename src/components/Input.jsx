import { Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

function Input(props) {
    const { label, name, placeholder, ...rest } = props;
    return (
        <Stack direction={"row"} spacing={2}>
            <label htmlFor={name}>{label}</label>
            <Stack>
                <Field id={name} name={name} placeholder={placeholder} {...rest} />
                <ErrorMessage style={{ color: "red" }} name={name} component="div" />
            </Stack>
        </Stack>
    )
}

export default Input;