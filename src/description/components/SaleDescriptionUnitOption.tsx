import { useContext, useEffect, useState } from "react";
import { IShoppingSaleUnitOption } from "../../api/structures/shoppings/sales/IShoppingSaleUnitOption";
import SelectionContext from "../../shared/settings/SelectionContext";

interface IProps {
  option: IShoppingSaleUnitOption;
  unitId: string;
}

const SaleDescriptionUnitOption = ({ option, unitId }: IProps) => {
  const {
    actions: { selectOption },
  } = useContext(SelectionContext);

  const [selection, setSelection] = useState<string>("null");

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (e.target.value !== "null") setSelection(e.target.value);
  };

  useEffect(() => {
    selectOption(unitId, option.id, selection);
  }, [selection]);

  return (
    <select onChange={handleChange} value={selection}>
      <option value="null">{option.name} / 선택</option>
      {option.candidates.map(({ id, name }) => (
        <option key={id} value={id}>
          {option.name} / {name}
        </option>
      ))}
    </select>
  );
};

export default SaleDescriptionUnitOption;
