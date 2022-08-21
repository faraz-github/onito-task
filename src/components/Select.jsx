import { Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

function Select(props) {
    const { label, name, options, ...rest } = props;
    return (
        <Stack direction={"row"} spacing={2}>
            <label htmlFor={name}>{label}</label>
            <Stack>
                <Field as="select" id={name} name={name} {...rest}>
                    {
                        options.map((option, index) => {
                            return (
                                <option key={index} value={option.value}>
                                    {option.key}
                                </option>
                            )
                        })
                    }
                </Field>
                <ErrorMessage style={{ color: "red" }} name={name} component="div" />
            </Stack>
        </Stack>
    )
}

export default Select;