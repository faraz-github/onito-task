import { Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

function Input(props) {
    const { label, name, placeholder, ...rest } = props;
    return (
        <>
            {
                (label !== "")
                    ? <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <label htmlFor={name}>{label}</label>
                        <Stack style={{ width: "100%" }}>
                            <Field id={name} name={name} placeholder={placeholder} {...rest} />
                            <ErrorMessage style={{ color: "red" }} name={name} component="div" />
                        </Stack>
                    </Stack>
                    : <Stack style={{ width: "100%" }}>
                        <Field id={name} name={name} placeholder={placeholder} {...rest} />
                        <ErrorMessage style={{ color: "red" }} name={name} component="div" />
                    </Stack>
            }
        </>

    )
}

export default Input;