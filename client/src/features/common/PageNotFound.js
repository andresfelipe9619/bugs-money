import React from "react";
import { Segment, Image } from "semantic-ui-react";
import no_money from "../../assets/images/no_money.jpg";

const PageNotFound = ({ location }) => (
  <Segment textAlign="center">
    <h1>404</h1>
    <h3>
      Esta pagina no existe
      <code>{"   " + location.pathname}</code>
    </h3>
    <Image src={no_money} size="medium" rounded verticalAlign="middle" />
  </Segment>
);

export default PageNotFound;
