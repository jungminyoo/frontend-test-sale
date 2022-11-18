import { useContext } from "react";
import SelectionContext from "../../shared/settings/SelectionContext";

const SaleDescriptionStocks = () => {
  const {
    state: { results },
    actions: { removeResult, addResultQuantity, removeResultQuantity },
  } = useContext(SelectionContext);

  return (
    <ul style={{ border: "2px solid black" }}>
      {results.map((result) => (
        <li key={result.stock.id}>
          <h5>{result.stock.name}</h5>
          <span>가격 : {result.stock.price.real * result.quantity}원</span>
          <br />
          <button onClick={() => addResultQuantity(result.stock.id)}>+</button>
          <span>수량 : {result.quantity}</span>
          <button onClick={() => removeResultQuantity(result.stock.id)}>
            -
          </button>
          <br />
          <button onClick={() => removeResult(result.stock.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default SaleDescriptionStocks;
