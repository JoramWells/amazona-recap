import { Container, Grid, makeStyles, Typography, Button, Paper } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import CreditCardSharpIcon from '@material-ui/icons/CreditCardSharp';
import AssignmentReturnSharpIcon from '@material-ui/icons/AssignmentReturnSharp';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:theme.spacing(4)
    },
    btn:{
        '& .MUIButton-root:hover':{
            backgroundColor:"blue"

        },
        backgroundColor:"hsl(30, 100%, 60%)"



    },
    paper:{
        padding:theme.spacing(2),
        backgroundColor:"hsl(0, 0%, 95%)"
    },
    typography:{
        margin:theme.spacing(2)

    }
}))

export default function ProductDetail() {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img alt="image_src" src="http://ae01.alicdn.com/kf/HTB17_GBXIvrK1Rjy0Feq6ATmVXaQ.jpg?width=800&height=800&hash=1600" 
                    style={{width:"300px"}}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" color="textSecondary">
                        Amazing curtains

                    </Typography>
                    <Typography variant="subtitle1">
                        Brand:n/a (3 reviews)
                    </Typography>
                    <hr />
                    <Typography variant="h5" color="textSecondary">
                        <b>ksh:80</b>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Sold by: <span style={{color:"#0080ff"}}>ANNIE'S ONLINE MALL</span>
                        <br />
                        you can choose from a variety of colors and sizes
                        <hr />
                    </Typography>

                    <Button variant="contained" 
                    className={classes.btn}
                    size="large" 
                    disableElevation
                    endIcon={<ShoppingCartIcon />}
                    >Add to Cart</Button>
                    <hr />
                    <Typography variant="subtitle2">
                        Categories:
                        <br />
                        Tags: 
                    </Typography>
                    <hr />
                    <div>
                    <FacebookIcon />
                    <InstagramIcon style={{color:"orange"}}/>
                    </div>
                    
                </Grid>
                <Grid item xs={4}>
                    <Paper
                    elevation={0} 
                    className={classes.paper}>
                        <Typography variant="subtitle2">
                            <LanguageSharpIcon />
                            Shipping globally
                        </Typography>
                        <Typography variant="subtitle2">
                            <AssignmentReturnSharpIcon />
                            Free 7 day return
                        </Typography>
                        <Typography variant="subtitle2">
                            <CreditCardSharpIcon />
                            Pay Online
                        </Typography>
                    </Paper>
                    <Typography className={classes.typography}>
                        Sell on Kikapu. <Link to="/login">Login !</Link>
                    </Typography>

                    <Grid>
                        <img alt="earings" src="https://i0.wp.com/naborhi.com/wp-content/uploads/2019/10/Zuwena-Ankara-Africa-Map-Earrings.jpg"
                        style={{width:"300px"}}
                         />
                    </Grid>
                </Grid>
            </Grid>
            
        </Container>
    )
}
