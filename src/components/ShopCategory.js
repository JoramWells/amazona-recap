import { CssBaseline, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    root:{
        backgroundColor:"hsl(0, 0%, 95%)",
        marginTop:"0px",
        padding:theme.spacing(2)

    },
}
))

export default function ShopCategory() {
    const classes = useStyles()
    return (
        <Paper className={classes.root} elevation={0}>
            <Grid container>
                <Grid item xs={6}>
                    HOME

                </Grid>
            </Grid>
            <CssBaseline />
        </Paper>

    )
}
