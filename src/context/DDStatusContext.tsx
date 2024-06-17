"use client";
// This context is used for the services / products

import React, { createContext, useState, useContext, ReactNode } from "react";

interface DropdownContextProps {
  status: string | null;
  setStatusLabel: (label: string) => void;
  type: string;
}

const DdStatusContext = createContext<DropdownContextProps | undefined>(
  undefined
);

export const StatusProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [status, setStatus] = useState<string | null>(null);

  const setStatusLabel = (label: string) => {
    setStatus(label);
  };

  const type = "status";

  return (
    <DdStatusContext.Provider value={{ status, setStatusLabel, type }}>
      {children}
    </DdStatusContext.Provider>
  );
};

export const useStatusContext = (): DropdownContextProps => {
  const context = useContext(DdStatusContext);
  if (!context) {
    throw new Error("useStatusContext must be used within a StatusProvider");
  }
  return context;
};
