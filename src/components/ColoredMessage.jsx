export const ColoredMessage = (props) => {
  const { color, children } = props; // Propsを分割代入
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };
  return <p style={contentStyle}>{children}</p>;
};