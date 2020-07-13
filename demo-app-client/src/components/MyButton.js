import React from 'react'
import Button from '@material-ui/core/Button'

const MyButton = (props) => (
    <Button
        variant="contained"
        color={props.color}
        fullWidth={true}
        onClick={props.onClick}
        disabled={props.disabled} >
        {props.children}
    </Button>
)

export default MyButton