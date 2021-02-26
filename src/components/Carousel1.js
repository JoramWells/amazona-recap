import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  margin: theme.spacing(2),
}));
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Carousel1() {
  const classes = useStyles();
  return (
    <Container>
      <Carousel responsive={responsive}>
          <Link to="/product1">
          <Grid>
          <img
            alt="image_file"
            src="https://i.pinimg.com/originals/77/3d/46/773d46f3f172a71fee4e571a8a20e8c9.jpg"
            style={{ width: "200px" }}
          />
        </Grid>
          </Link>

        <Grid>
          <img
            alt="image_file"
            src="https://i.pinimg.com/originals/77/3d/46/773d46f3f172a71fee4e571a8a20e8c9.jpg"
            style={{ width: "200px" }}
          />
        </Grid>
        <Grid>
          <img
            alt="image_file"
            src="https://i.pinimg.com/originals/77/3d/46/773d46f3f172a71fee4e571a8a20e8c9.jpg"
            style={{ width: "200px" }}
          />
        </Grid>
        <Grid>
          <img
            alt="image_file"
            src="https://i.pinimg.com/originals/77/3d/46/773d46f3f172a71fee4e571a8a20e8c9.jpg"
            style={{ width: "200px" }}
          />
        </Grid>
      </Carousel>
    </Container>
  );
}
