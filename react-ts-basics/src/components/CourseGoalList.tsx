import { CourseGoalType } from "../types/CourseGoal";
import CourseGoal from "./CourseGoal";


interface CourseGoalListProps {
    goals: CourseGoalType[];
}


export const CourseGoalList = ({ goals }: CourseGoalListProps) => {
    return <ul>
        {
            goals.map(goal => (
                <li
                    key={goal.id}
                >
                    <CourseGoal
                        title={goal.title}
                        onDelete={() => {
                            // setCourseGoals(prev => prev.filter(g => g.id !== goal.id));
                            // onDelete();
                        }}
                    >
                        <p>
                            {goal.description}
                        </p>
                    </CourseGoal>
                </li>

            ))
        }
    </ul>
}