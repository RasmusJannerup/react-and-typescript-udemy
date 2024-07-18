import { ReactNode } from "react";
import { CourseGoalType } from "../types/CourseGoal";
import CourseGoal from "./CourseGoal";
import { InfoBox } from "./InfoBox";


interface CourseGoalListProps {
    goals: CourseGoalType[];
    onDelete: (id: number) => void;
}


export const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {

    if (goals.length === 0) {
        return <InfoBox
            mode="hint"
        >
            You have no goals yet. Why not add one?
        </InfoBox>
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = <InfoBox
            mode="warning"
            severity="high"
        >
            You have a lot of goals. Consider deleting some.
        </InfoBox>
    }
    return <>
        {warningBox}
        <ul>
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
    </>
}