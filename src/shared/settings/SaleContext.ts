import { createContext } from "react";
import { MACBOOK_2020_PRO_13 } from "../../api/data/MACBOOK_2020_PRO_13";
import { IShoppingSale } from "../../api/structures/shoppings/sales/IShoppingSale";

const SaleContext = createContext<IShoppingSale>(MACBOOK_2020_PRO_13);

const { Consumer: SaleContextConsumer, Provider: SaleContextProvider } =
  SaleContext;

export { SaleContextConsumer, SaleContextProvider };

export default SaleContext;
