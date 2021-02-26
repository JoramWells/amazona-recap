import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1

    },
    footer:{
        backgroundColor:"hsl(0, 0%, 15%)",
        textAlign:"center",
        color:"white",
        padding:"25px"


    },
    footerContainer:{
        padding:"100px"
    }
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <footer>
            <Container className={classes.footerContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
kdjfksajf
                    </Grid>
                    <Grid item xs={3}>
fjkdslfjlsd
                    </Grid>
                    <Grid item xs={3}>
fksdl;kf;
                    </Grid>
                    <Grid item xs={3}>
flkdslf;
                    </Grid>
                </Grid>
            </Container>
            <div className={classes.footer}>
                Copyright
            </div>
            
        </footer>
    )
}
