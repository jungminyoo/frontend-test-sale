import { useCallback, useContext, useMemo } from "react";
import SaleContext from "../../shared/settings/SaleContext";
import SelectionContext from "../../shared/settings/SelectionContext";
import SaleDescriptionStocks from "./SaleDescriptionStocks";
import SaleDescriptionUnits from "./SaleDescriptionUnits";

interface ICategory {
  id: string;
  parent: ICategory | null;
  code: string;
  name: string;
  created_at: string;
}

function SaleDescription() {
  const sale = useContext(SaleContext);
  const {
    state: { results },
  } = useContext(SelectionContext);

  const generateCategory = useCallback((category: ICategory): string => {
    if (category.parent === null) return "전체";

    return category.name + " < " + generateCategory(category.parent);
  }, []);

  const total = useMemo(() => {
    let newTotal = 0;

    results.forEach(
      (result) => (newTotal += result.quantity * result.stock.price.real)
    );

    return newTotal;
  }, [results]);

  return (
    <main>
      {sale.representative_images.map(({ name, url }, index) => (
        <img key={index} src={url} alt={name} style={{ maxHeight: "300px" }} />
      ))}
      <br />
      <small>{generateCategory(sale.category)}</small>
      <br />
      <small>{sale.channels.map((channel) => channel.name + " ")}</small>
      <h1>{sale.content.title}</h1>

      <SaleDescriptionUnits />
      <SaleDescriptionStocks />

      <section>
        <h3>합계</h3>
        <span>{total} 원</span>
      </section>
    </main>
  );
}

export default SaleDescription;
