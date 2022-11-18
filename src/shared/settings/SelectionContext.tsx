import React, { createContext, useState } from "react";

interface ISelectionContext {
  state: {
    units: string[];
  };
  actions: {
    setUnits: React.Dispatch<React.SetStateAction<string[]>> | null;
  };
}

interface IProps {
  children: React.ReactNode;
}

const initialState = {
  state: {
    units: [],
  },
  actions: {
    setUnits: null,
  },
};

const SelectionContext = createContext<ISelectionContext>(initialState);

const SelectionContextProvider = ({ children }: IProps) => {
  const [units, setUnits] = useState<string[]>([]);

  const value: ISelectionContext = {
    state: {
      units,
    },
    actions: {
      setUnits,
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
