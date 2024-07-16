import { useState } from 'react';
import img from '../public/goals.jpg';
import CourseGoal from "./components/CourseGoal";
import { Header } from "./components/Header";

type CourseGoal = {
  title: string;
  id: string;
  description: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setCourseGoals(prev => [
      ...prev,
      {
        title: 'New Goal',
        id: Math.random().toString(),
        description: 'Description'
      }
    ]);
  }


  return <main>
    <Header
      image={{
        src: img,
        alt: 'A piece of cake'
      }}
    >
      <h1>
        Course Goals
      </h1>
    </Header>
    <button onClick={() => {
      handleAddGoal();
    }}>
      Add New Goal
    </button>
    {
      courseGoals.map(goal => (
        <CourseGoal
          key={goal.id}
          title={goal.title}
          onDelete={() => {
            setCourseGoals(prev => prev.filter(g => g.id !== goal.id));
          }}
        >
          <p>
            {goal.description}
          </p>
        </CourseGoal>

      ))
    }
    {/* <CourseGoal
      title="Finish the course"
      onDelete={() => console.log('Delete clicked')}
    >
      <p>
        asd
      </p>
    </CourseGoal> */}
  </main>
}
