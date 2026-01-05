import { createContext, useState } from "react";

export const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
  const [incidents, setIncidents] = useState([]);

  const addIncident = (incident) => {
    setIncidents([
      ...incidents,
      {
        ...incident,
        status: "Pending",
        id: Date.now(),
      },
    ]);
  };

 return (
  <IncidentContext.Provider
    value={{ incidents, addIncident, setIncidents }}
  >
    {children}
  </IncidentContext.Provider>
);

};
