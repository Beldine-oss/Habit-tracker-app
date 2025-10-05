import { useState } from "react";
import HabitItem from "./HabitItem";

function HabitList() {
  // Temporary sample data
  const [habits] = useState([
    { id: 1, name: "Drink Water" },
    { id: 2, name: "Morning Walk" },
  ]);

  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

export default HabitList;
