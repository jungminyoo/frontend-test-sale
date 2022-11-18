import React, { createContext, useContext, useEffect, useState } from "react";
import { IShoppingSaleUnit } from "../../api/structures/shoppings/sales/IShoppingSaleUnit";
import { IShoppingSaleUnitStock } from "../../api/structures/shoppings/sales/IShoppingSaleUnitStock";
import SaleContext from "./SaleContext";

interface IResult {
  quantity: number;
  stock: IShoppingSaleUnitStock;
}

interface IOption {
  id: string;
  candidateId?: string;
  isSelected: boolean;
}

export interface IUnit {
  id: string;
  options: IOption[];
}

interface ISelectionContext {
  state: {
    currentUnits: IUnit[];
    results: IResult[];
  };
  actions: {
    initCurrentUnits: (units: IShoppingSaleUnit[]) => void;
    selectOption: (
      unitId: string,
      optionId: string,
      candidateId: string
    ) => void;
    removeResult: (resultId: string) => void;
    addResultQuantity: (resultId: string) => void;
    removeResultQuantity: (resultId: string) => void;
  };
}

interface IProps {
  children: React.ReactNode;
}

const initialState: ISelectionContext = {
  state: {
    currentUnits: [],
    results: [],
  },
  actions: {
    initCurrentUnits: (units: IShoppingSaleUnit[]) => {},
    selectOption: (unitId: string, optionId: string, candidateId: string) => {},
    removeResult: (resultId: string) => {},
    addResultQuantity: (resultId: string) => {},
    removeResultQuantity: (resultId: string) => {},
  },
};

const SelectionContext = createContext<ISelectionContext>(initialState);

const SelectionContextProvider = ({ children }: IProps) => {
  const [currentUnits, setCurrentUnits] = useState<IUnit[]>([]);
  const [results, setResults] = useState<IResult[]>([]);

  const { units } = useContext(SaleContext);

  useEffect(() => {
    console.log(currentUnits);
    console.log(results);
  }, [currentUnits, results]);

  const generateResult = (newCurrentUnits: IUnit[], unitId: string) => {
    const targetCurrentUnit = newCurrentUnits.find(
      (unit) => unit.id === unitId
    );
    const targetUnit = units.find((unit) => unit.id === unitId);

    if (targetCurrentUnit === undefined) return;
    if (targetUnit === undefined) return;

    let filteredStock: IShoppingSaleUnitStock[] = targetUnit.stocks;

    for (const option of targetCurrentUnit.options) {
      if (!option.isSelected) return;

      filteredStock = filteredStock.filter(
        ({ elements }) =>
          elements.filter(
            ({ candidate_id, option_id }) =>
              candidate_id === option.candidateId && option_id === option.id
          ).length > 0
      );
    }

    if (filteredStock.length !== 1) return;
    if (results.find((result) => filteredStock[0].id === result.stock.id))
      return;

    if (filteredStock.length === 1)
      setResults(results.concat({ quantity: 1, stock: filteredStock[0] }));
  };

  const initCurrentUnits = (units: IShoppingSaleUnit[]) => {
    const newCurrentUnits: IUnit[] = [];

    units.forEach(({ id, options }) => {
      newCurrentUnits.push({
        id,
        options: options.map(({ id }) => ({ id, isSelected: false })),
      });
    });

    setCurrentUnits(newCurrentUnits);
  };

  const selectOption = (
    unitId: string,
    optionId: string,
    candidateId: string
  ) => {
    const newCurrentUnits = currentUnits.map((unit) =>
      unit.id !== unitId
        ? unit
        : {
            id: unit.id,
            options: unit.options.map((option) =>
              option.id !== optionId
                ? option
                : { id: option.id, candidateId, isSelected: true }
            ),
          }
    );

    generateResult(newCurrentUnits, unitId);

    setCurrentUnits(newCurrentUnits);
  };

  const removeResult = (resultId: string) => {
    setResults(results.filter(({ stock: { id } }) => id !== resultId));
  };

  const addResultQuantity = (resultId: string) =>
    setResults(
      results.map((result) =>
        result.stock.id !== resultId
          ? result
          : { quantity: result.quantity + 1, stock: result.stock }
      )
    );

  const removeResultQuantity = (resultId: string) =>
    setResults(
      results.map((result) =>
        result.stock.id !== resultId
          ? result
          : {
              quantity:
                result.quantity > 1 ? result.quantity - 1 : result.quantity,
              stock: result.stock,
            }
      )
    );

  const value: ISelectionContext = {
    state: {
      currentUnits,
      results,
    },
    actions: {
      initCurrentUnits,
      selectOption,
      removeResult,
      addResultQuantity,
      removeResultQuantity,
    },
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

const { Consumer: SelectionContextConsumer } = SelectionContext;

export { SelectionContextConsumer, SelectionContextProvider };

export default SelectionContext;
