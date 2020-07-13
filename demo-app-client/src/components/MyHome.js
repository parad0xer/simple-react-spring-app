import React from 'react'
import MyButton from './MyButton'
import MyInput from './MyInput'
import MyList from './MyList'
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from 'react'
const axios = require('axios');

const SERVER_URL = process.env.DEMO_APP_SERVER_URL || 'http://127.0.0.1:8080/'

const MyHome = (props) => {
    // list => [{id, num}, ...]
    const [list, updateList] = useState([])
    const [number, updateNumber] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        axios.get(SERVER_URL + 'get')
            .then(res => {
                updateList(res.data)
            })
            .catch(res => {

            })
        console.log('calling useEffect..')
    }, [buttonClicked])

    const setButtonState = () => {
        const oldState = buttonClicked
        const newState = oldState ^ true
        setButtonClicked(newState)
    }
    // receive an integer to add to the list
    const addNumberToList = (num) => {
        let id = "999"
        if (num.match(/\d+/)) {
            axios.post(SERVER_URL + 'add', {
                id, num
            })
                .then((res) => {
                    id = res.data
                    let newList = [...list, { id, num }]
                    updateList(newList)
                })
                .catch((err) => {
                    console.log('error** ', err)
                })
        }
        updateNumber('')
        // console.log('new list after addition: ', list)       
    }
    // receive an integer to delete from list
    const removeNumberFromList = (num) => {
        const oldList = [...list]
        updateNumber('')
        let id = "999"
        axios.post(SERVER_URL + 'del', {
            id, num
        })
            .then(res => {
                if (res.data === "Deleted")
                    setButtonState()
            })
            .catch(err => {
                console.log('error** ', err)
            })
        // console.log('new list after deletion: ', list)
    }
    const addNumberHandler = () => {
        // console.log('+')
        addNumberToList(number)
    }
    const removeNumberHandler = () => {
        // console.log('-')
        removeNumberFromList(number)
    }
    const numberHandler = (e) => {
        updateNumber(e.target.value)
    }
    const listClickHandler = (e) => {
        updateNumber(e)
    }

    return (
        <div style={{ maxWidth: '400px', maxHeight: '170px', margin: 'auto' }}>
            <h2>
                Demo App
        </h2>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <MyInput
                        label="Enter a number (max 10 digit)"
                        value={number}
                        onChange={numberHandler} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MyButton
                        color="primary"
                        onClick={addNumberHandler} 
                        disabled={!(number !== '')}
                        >+</MyButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MyButton
                        color="secondary"
                        disabled={!(number !== '')}
                        onClick={removeNumberHandler}>-</MyButton>
                </Grid>
                <Grid
                    item xs={12}
                    style={{ maxHeight: "200px" }}>
                    <MyList
                        items={list}
                        onClick={listClickHandler}
                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default MyHome