import { Container, FormControl, Grid, Input, InputLabel, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow:1,
        marginTop:theme.spacing(5)
    },
    paper:{
        padding:theme.spacing(4)
    }
}))

export default function Login() {
    const classes = useStyles()
    return (
        <Container>
            <Grid className={classes.root}>
                <Paper className={classes.paper}>
                <FormControl>
                <InputLabel>Email Address</InputLabel>
                <Input aria_describeby="Enter email address"/>

            </FormControl>
                </Paper>
            </Grid>

            
        </Container>
    )
}
