import { Fragment } from "react";
import {
  Header,
  Container,
  Footer,
  Item,
  ItemFunction,
  Movies,
  ImgScroll,
} from "./components/index";

import "./App.css";

let style = { backgroundColor: "red" };
const App = () => {
  return (
    <Fragment>
      {/* <ErrorBoundary fallback="<h1>Error</h1>"> */}
      {/* <Header desc="Header" name="ahmed" color="red" />
      <Container> hi</Container>
      <Footer /> */}

      {/* <div className="hello">hello</div>
      <div style={style}>world</div>
      <label htmlFor="name" id="nm">
        Name
      </label>
      <br></br>
      <input id="name"></input> */}
      {/* <Item />
      <ImgScroll /> */}
      {/* <ItemFunction /> */}
      <Movies />
      {/* </ErrorBoundary> */}
    </Fragment>
  );
};

export default App;
