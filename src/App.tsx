import "./App.css";

import { IShoppingSale } from "./api/structures/shoppings/sales/IShoppingSale";
import { SaleContextProvider } from "./shared/settings/SaleContext";
import SaleDescription from "./description/components/SaleDescription";
import { SelectionContextProvider } from "./shared/settings/SelectionContext";

interface Props {
  sale: IShoppingSale;
}

function App({ sale }: Props) {
  return (
    <SaleContextProvider value={sale}>
      <SelectionContextProvider>
        <SaleDescription />
      </SelectionContextProvider>
    </SaleContextProvider>
  );
}

export default App;
