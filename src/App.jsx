export const App = () => {
  // ボタン押すと実行される関数
  const onClickButton = () => {
    alert("送信しますか？");
  }
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <div>
      <h1 style={{ color: "red" }}> こんにちは！ </h1>
      <p style={contentStyle}> お元気ですか? </p>
      <button onClick={onClickButton}> ボタン </button>
    </div>
  );
};
