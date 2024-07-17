import { useRef } from "react";

interface NewGoalProps {
    onAddGoal: (goal: string, summary: string) => void;
}

export const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleAddGoal(e: React.FormEvent<HTMLFormElement>) {
        // Add a new goal
        e.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        if (enteredGoal.trim().length === 0 || enteredSummary.trim().length === 0) {
            return;
        }

        e.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }


    return <form onSubmit={handleAddGoal}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input ref={goal} type="text" id="goal" />
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input ref={summary} type="text" id="summary"></input>
        </p>
        <button type="submit">Add Goal</button>
    </form>
};