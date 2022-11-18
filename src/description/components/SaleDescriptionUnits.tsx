import { useContext, useEffect } from "react";
import SaleContext from "../../shared/settings/SaleContext";
import SelectionContext from "../../shared/settings/SelectionContext";
import SaleDescriptionUnitOption from "./SaleDescriptionUnitOption";

const SaleDescriptionUnits = () => {
  const { units } = useContext(SaleContext);
  const {
    actions: { initCurrentUnits },
  } = useContext(SelectionContext);

  useEffect(() => {
    initCurrentUnits(units);
  }, [units]);

  return (
    <section>
      <h3>구성품 옵션 선택</h3>
      {units.map((unit) => (
        <div key={unit.id}>
          <h4>{unit.name}</h4>

          {unit.options.map((option) => (
            <SaleDescriptionUnitOption
              key={option.id}
              unitId={unit.id}
              option={option}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default SaleDescriptionUnits;
