import React from "react";
import TextField from '@material-ui/core/TextField';

const MyInput = (props) => (
    <TextField
        label={props.label}
        variant="outlined"
        fullWidth={true}
        size="small"
        inputProps={{maxLength:"10"}}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
    />
)

export default MyInput