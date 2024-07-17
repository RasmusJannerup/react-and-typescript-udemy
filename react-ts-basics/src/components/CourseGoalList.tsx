import { CourseGoalType } from "../types/CourseGoal";
import CourseGoal from "./CourseGoal";


interface CourseGoalListProps {
    goals: CourseGoalType[];
    onDelete: (id: number) => void;
}


export const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
    return <ul>
        {
            goals.map(goal => (
                <li
                    key={goal.id}
                >
                    <CourseGoal
                        id={goal.id}
                        title={goal.title}
                        onDelete={onDelete}
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