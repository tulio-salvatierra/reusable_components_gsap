import { gsap } from "gsap";

let activeTimeline = null;

export function buildTimeline(recipe, container = document) {
  if (!recipe) return;

  // Kill previous animation
  if (activeTimeline) {
    activeTimeline.kill();
    activeTimeline = null;
  }

  const tl = gsap.timeline({
    defaults: recipe.defaults || {},
  });

  recipe.timeline.forEach((step) => {
    const selector = `[data-anim="${step.target}"]`;
    // Scope the selector to the container
    const elements = container.querySelectorAll(selector);
    
    // Skip if no elements found
    if (elements.length === 0) {
      console.warn(`No elements found for selector: ${selector} within container`);
      return;
    }

    const vars = {
      ...(step.to || {}),
    };

    // ONLY add these if defined
    if (step.duration != null) vars.duration = step.duration;
    if (step.ease != null) vars.ease = step.ease;
    if (step.stagger != null) vars.stagger = step.stagger;

    if (step.from) {
      tl.fromTo(elements, step.from, vars, step.at);
    } else {
      tl.to(elements, vars, step.at);
    }
  });

  activeTimeline = tl;
  return tl;
}