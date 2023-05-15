import "./Header.css";
const Header = (props) => {
  return (
    <div style={{ color: props.color }}>
      {props.desc} {props.name}
    </div>
  );
};
export default Header;
