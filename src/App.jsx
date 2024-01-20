import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => { // ボタン押すと実行される関数
  const onClickButton = () => {
    alert("送信しますか？");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}> こんにちは！ </h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}> ボタン </button>
    </div>
  );
};
