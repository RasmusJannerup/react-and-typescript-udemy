export const NewGoal = () => {
    function handleAddGoal(e: React.FormEvent) {
        // Add a new goal
        e.preventDefault();
    }

    return <form onSubmit={handleAddGoal}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input type="text" id="goal" />
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary"></input>
        </p>
        <button type="submit">Add Goal</button>
    </form>
};