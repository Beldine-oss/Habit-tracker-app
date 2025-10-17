Project: HabitFlow (inside `habit-flow/`)

Quick context
- Single-page React app scaffolded with Vite. Main app lives in `habit-flow/`.
- Uses React 19, Tailwind-style utility classes in JSX, and a small component/page layout.
- No backend or persistence implemented yet — components use local state and console logging.

How to run (developer workflow)
- Primary app folder: `habit-flow/` — run commands from there.
- Install and run dev server:
  - `cd habit-flow; npm install` then `npm run dev` (Vite dev server)
- Build / preview:
  - `npm run build` then `npm run preview`
- Linting: `npm run lint` (runs ESLint configured in `habit-flow/package.json`).

Architecture & patterns to know
- File layout of importance:
  - `habit-flow/src/components/` — small presentational and form components (AddHabitForm.jsx, HabitList.jsx, HabitItem.jsx, HeroSection.jsx)
  - `habit-flow/src/pages/` — page containers (Dashboard.jsx) where state should be lifted
  - `habit-flow/index.html`, `habit-flow/src/main.jsx` (app entry managed by Vite)
- Component conventions
  - Components are plain function components as default exports (e.g. `export default AddHabitForm;`).
  - Minimal styling mixes Tailwind classes and inline styles.
  - Example: `AddHabitForm.jsx` holds a local `useState` for the form and currently logs submissions with `console.log("New Habit:", habit)`.
  - `HabitList.jsx` currently creates sample state with `useState([{id:1, name:'Drink Water'}, ...])` and maps to `HabitItem`.
  - `Dashboard.jsx` composes the page: it imports `AddHabitForm` (aliased as `HabitForm`) and `HabitList` and is the right place to lift shared state.

Integration & extension notes (concrete, actionable)
- Persistence: there's no API/service layer yet. If adding persistence, create `habit-flow/src/services/storage.js` and expose `getHabits()` / `saveHabits()` (use localStorage for a quick start). Lift habit state to `Dashboard.jsx` and pass handlers to `AddHabitForm` and `HabitList`.
- Routing: `react-router-dom` is in dependencies but not used in current sources. If adding routes, wire Router in `main.jsx` and add `pages/` routes.
- Lint and quick fixes: run `npm run lint`. There is no Prettier configured; follow the existing code style (default exports, JSX spacing, inline styles mixed with Tailwind).

Project-specific gotchas
- Tailwind config filename at repo root is `taiwind.config.js` (typo). Verify Tailwind setup before upgrading or relying on the file name.
- Root `package.json` also has vite scripts; prefer running commands from the `habit-flow/` package to pick up the correct dependencies.
- Many components use temporary/sample data (search for `useState([` in `habit-flow/src/components`) — treat these as placeholders.

Coding examples to follow
- If adding a controlled submit handler, mirror `AddHabitForm.jsx` structure: local state, `onSubmit` prevents default, validates empty string, then calls a handler.
- To lift state to `Dashboard.jsx`: keep `habits` as an array of objects with `{id:number, name:string}` and pass `addHabit` and `removeHabit` callbacks down.

When you edit or add files, prefer small, focused changes: update one component or service at a time and run the dev server to validate UI behavior.

Files to inspect for patterns/examples
- `habit-flow/src/components/AddHabitForm.jsx`
- `habit-flow/src/components/HabitList.jsx`
- `habit-flow/src/components/HabitItem.jsx`
- `habit-flow/src/components/HeroSection.jsx`
- `habit-flow/src/pages/Dashboard.jsx`
- `habit-flow/package.json` (scripts and deps)

If something is missing
- I relied on source files and package.json; there are no tests or CI config to reference. If you want CI/lint rules or preferred commit message formats, add a `.github/` policy file and I can incorporate it.

Ask me to expand any section, add a small example patch (lift state, add localStorage service), or wire react-router routes.
