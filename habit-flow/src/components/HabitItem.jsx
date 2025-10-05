function HabitItem({ habit }) {
  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      {habit.name}
    </div>
  );
}

export default HabitItem;
