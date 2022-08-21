import { Box, Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

import DatePickerView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
    const { label, name, placeholder, ...rest } = props;
    return (
        <Stack direction={"row"} spacing={2}>
            <label htmlFor={name}>{label}</label>
            <Stack style={{ width: "100%" }}>
                <Field name={name}>
                    {
                        ({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return <Box className="customDatePickerWidth">
                                <DatePickerView
                                    id={name}
                                    placeholderText={placeholder}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    onChange={(data) => setFieldValue(name, data)}
                                />
                            </Box>
                        }
                    }
                </Field>
                <ErrorMessage style={{ color: "red" }} name={name} component="div" />
            </Stack>
        </Stack>
    )
}

export default DatePicker;