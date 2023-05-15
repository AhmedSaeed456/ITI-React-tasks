import { Component, PureComponent } from "react";
import axios from "axios";
import Movie from "./movie";

// const Item = () => {
//   return <div>hello from function component</div>;
// };
//Mount methods
class Item extends PureComponent {
  // state = { name: "ahmed" };
  // or
  constructor() {
    super();
    this.state = { item1: null };
    console.log("constructor");
  }
  componentDidMount() {
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const url = "https://api.themoviedb.org/3";
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiUrl = url + path + apiKey;
    console.log("Did Mount");
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({ item1: json });
    //   });
    axios.get(apiUrl).then((res) => {
      this.setState({ item1: res.data.results });
      console.log(res.data.results);
    });
  }
  render() {
    if (!this.state.item1) return <h1>loading......</h1>;
    // const handleClick = (e) => {
    //   console.log(e);
    //   // this.state.sold = true; //Do not mutate state directly. Use setState() (because referece will not change)
    //   // this.setState({
    //   //   item1: { ...this.state.item1, sold: !this.state.item1.sold },
    //   // }); // mutate state using setState()
    //   //another better way
    //   // setState is asyncronous (the rest code will executed will setState do its job)
    //   this.setState((oldState) => ({
    //     item1: { ...oldState.item1, sold: !oldState.item1.sold },
    //   }));
    //   console.log(this.state.item1[1].original_title);
    // };
    console.log("render");
    return (
      <>
        <h1>This is my class component!, {this.state.item1[0].title},</h1>
        <div>
          {this.state.item1.map((u) => (
            <Movie {...u}></Movie>
          ))}
        </div>
        {/* event */}
        {/* <button onClick={handleClick}>click to change state</button> */}
      </>
    );
  }
  //update methods
  // To make update :
  // 1) state updated
  // 2) props data updated (useless rerender if i add new item) and to avoid uselessupdate
  //          => a) shouldComponentUpdate() => check if old data and new data is the same , not update
  //          => b) pure component => the component itself doesn't update until changes happened, not need to shouldComponentUpdate()
  // 3)forceUpdate() // to inforce update, not recommended
  // shouldComponentUpdate() {
  //   console.log("should update?");
  //   return true;
  //   // if return false , nothing will happend
  // } //u preferly choose purecomponent or shouldComponentUpdate()
  //render will called again here
  componentDidUpdate() {
    console.log("Did update");
  }
}

export default Item;
