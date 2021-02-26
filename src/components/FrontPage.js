import React from "react";
import Carousels from "./Carousels";
import Carousel1 from "./Carousel1";
import Items from "./Items";

export default function FrontPage() {
  return (
    <>
      <Carousels />
      <Items />
      <Carousel1 />
      <Items />
      <Carousel1 />
    </>
  );
}
