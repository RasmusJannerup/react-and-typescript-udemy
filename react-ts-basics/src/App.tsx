import { useState } from 'react';
import img from '../public/goals.jpg';
import { CourseGoalList } from './components/CourseGoalList';
import { Header } from "./components/Header";
import { CourseGoalType } from './types/CourseGoal';



export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = () => {
    setCourseGoals(prev => {
      var newGoal = {
        title: 'New Goal',
        id: Math.random().toString(),
        description: 'New Description'
      }
      return [...prev, newGoal]
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
    <button onClick={() => {
      handleAddGoal();
    }}>
      Add New Goal
    </button>
    <CourseGoalList
      goals={courseGoals}
    ></CourseGoalList>
  </main>
}
