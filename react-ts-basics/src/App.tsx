import { useState } from 'react';
import img from '../public/goals.jpg';
import { CourseGoalList } from './components/CourseGoalList';
import { Header } from "./components/Header";
import { NewGoal } from './components/NewGoal';
import { CourseGoalType } from './types/CourseGoal';



export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = () => {
    setCourseGoals(prev => {
      var newGoal = {
        title: 'New Goal',
        id: Math.random(),
        description: 'New Description'
      }
      return [...prev, newGoal]
    });
  }

  const handleDeleteGoal = (id: number) => {
    setCourseGoals(prev => {
      return prev.filter(g => g.id !== id);
    });
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
    <NewGoal />
    {/* <button onClick={() => {
      handleAddGoal();
    }}>
      Add New Goal
    </button> */}
    <CourseGoalList
      onDelete={handleDeleteGoal}
      goals={courseGoals}
    ></CourseGoalList>
  </main>
}
