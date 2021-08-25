import "../sassStyles/_container.scss";

const Container = (props) => {
  return <div className="todo__container">{props.children}</div>;
};

export default Container;
