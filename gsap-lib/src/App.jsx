import { useState } from "react";
import "./App.css";
import Stage from "./components/Stage/Stage";
import { animationRecipes } from "./animations/animations";
import { buildTimeline } from "./engine/buildTimeline";
import ScalingNav from "./components/Scaling-Burger/Scaling-Nav";

function App() {
  const [recipeId, setRecipeId] = useState(animationRecipes[0].id);

  const recipe = animationRecipes.find((r) => r.id === recipeId);

  return (
    <main>
      <header>
        <ScalingNav />
      </header>
      <div className="floating-menu">
        <select
          value={recipeId}
          onChange={(e) => setRecipeId(e.target.value)}
          className="border p-1"
        >
          {animationRecipes.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            console.log("PLAY", recipe);
            buildTimeline(recipe, document.querySelector(".stage") || document);
          }}
          className="ml-2 px-3 py-1 bg-black text-white rounded"
        >
          Play
        </button>
      </div>

      <Stage />
    </main>
  );
}

export default App;
