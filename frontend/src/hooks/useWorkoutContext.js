import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error(
      "WorkoutContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
