import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const MyList = (props) => {
    // const classes = useStyles();
    
    return (
        <div style={{ height: "100%", overflow: 'auto' }}>
            {props.items.length > 0 ? props.items.map((i, index) => (
                <List
                    component="nav"
                    aria-label="secondary mailbox folders"
                    key={i.id}
                    disablePadding={true}
                    dense={true}
                     >
                    <ListItem button>
                        <ListItemText primary={i.num} onClick={ (e)=>{props.onClick(i.num)} } />
                    </ListItem>
                </List>
            )) : null}
        </div>
    );
}
export default MyList