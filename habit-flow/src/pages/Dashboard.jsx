import HabitForm from "../components/AddHabitForm";
import HabitList from "../components/HabitList";

function Dashboard() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
}

export default Dashboard;
