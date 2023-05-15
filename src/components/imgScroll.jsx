import { Component, PureComponent } from "react";

// const Item = () => {
//   return <div>hello from function component</div>;
// };
//Mount methods
class ImgScroll extends PureComponent {
  // state = { name: "ahmed" };
  // or
  constructor() {
    super();
    this.state = { i: 1 };
    console.log("constructor");
  }

  render() {
    const next = () => {
      this.setState((prevState) => ({ i: prevState.i + 1 })); // increase index by 1
      if (this.state.i > 5) this.state.i = 0;
    };

    const prev = () => {
      this.setState((prevState) => ({ i: prevState.i - 1 })); // decrease index by 1
      if (this.state.i < 2) this.state.i = 7;
    };

    return (
      <>
        <h1>This is my Image Scroll class component!,</h1>
        <img width={400} height={400} src={`imgs/${this.state.i}.jpg`}></img>
        {/* event */}
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </>
    );
  }
}

export default ImgScroll;
