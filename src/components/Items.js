import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme=>({
    root:{
        backgroundColor:"hsl(0, 0%, 95%)",
        padding:theme.spacing(1),
        marginBottom:theme.spacing(5)
        
    }
})))

export default function Items() {

    const classes = useStyles();
    return (
        <Container container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography
                    variant="h5"
                    >Earings</Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                    <Typography
                    variant="subtitle1"
                    >
                    Best selling
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    )
}
