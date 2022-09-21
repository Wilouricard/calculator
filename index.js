function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/[1-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allClear} className="padButton AC rouge">
          AC
        </div>
        <div onClick={clear} className="padButton C rouge">
          C
        </div>
        <div onClick={() => display("/")} className="padButton diviser">
          /
        </div>
        <div onClick={() => display("*")} className="padButton multiplier">
          x
        </div>
        <div onClick={() => display("7")} className="padButton sept dark-gray">
          7
        </div>
        <div onClick={() => display("8")} className="padButton huit dark-gray">
          8
        </div>
        <div onClick={() => display("9")} className="padButton neuf dark-gray">
          9
        </div>
        <div onClick={() => display("-")} className="padButton moins">
          -
        </div>
        <div
          onClick={() => display("4")}
          className="padButton quatre dark-gray"
        >
          4
        </div>
        <div onClick={() => display("5")} className="padButton cinq dark-gray">
          5
        </div>
        <div onClick={() => display("6")} className="padButton six dark-gray">
          6
        </div>
        <div onClick={() => display("+")} className="padButton plus">
          +
        </div>
        <div onClick={() => display("1")} className="padButton un dark-gray">
          1
        </div>
        <div onClick={() => display("2")} className="padButton deux dark-gray">
          2
        </div>
        <div onClick={() => display("3")} className="padButton trois dark-gray">
          3
        </div>
        <div onClick={calculate} className="padButton egal blue">
          =
        </div>
        <div onClick={() => display("0")} className="padButton zero dark-gray">
          0
        </div>
        <div
          onClick={() => display(".")}
          className="padButton virgule dark-gray"
        >
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
