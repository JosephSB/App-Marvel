import React from "react";
import { ContainerLoader, Preloader, TextLoader } from "./styles";

const Loader = ({ message }) => {
  return (
    <ContainerLoader>
      <Preloader />
      <TextLoader>{message}</TextLoader>
    </ContainerLoader>
  );
};

export default Loader;
