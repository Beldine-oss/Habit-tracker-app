import { useState } from "react";

function AddHabitForm() {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim() === "") return;

    // For now, just log it — later we’ll save it
    console.log("New Habit:", habit);
    setHabit("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a habit..."
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
        Add Habit
      </button>
    </form>
  );
}

export default AddHabitForm;
