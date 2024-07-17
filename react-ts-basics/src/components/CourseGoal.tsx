import { PropsWithChildren } from "react";

interface CourseGoalProps extends PropsWithChildren {
    title: string;
    id: number
    onDelete: (id: number) => void;
}

export default function CourseGoal({ title, onDelete, children, id }: CourseGoalProps) {
    return <article>
        <div>
            <h2>
                {title}
            </h2>

            {children}

        </div>
        <button
            onClick={() => {
                onDelete(id);
            }}
        >
            Delete
        </button>
    </article>
}

// export const CourseGoal: FC<CourseGoalProps> = ({ title, onDelete, children }) => {
//     return <article>
//         <div>
//             <h2>
//                 {title}
//             </h2>

//             {children}

//         </div>
//         <button
//             onClick={onDelete}
//         >
//             Delete
//         </button>
//     </article>
// }

