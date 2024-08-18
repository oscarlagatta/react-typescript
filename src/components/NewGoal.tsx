import { type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // new FormData(e.currentTarget);

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" placeholder="Enter Goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input
          id="summary"
          type="text"
          placeholder="Enter Short Summary"
          ref={summary}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
