import { useEffect, useState } from 'react'
import HabitCard from './HabitCard'



function App() {

  const [showInput, setShowInput] = useState(false);

  const [habitName, setHabitName] = useState("");
  

  interface Habits{
    name: string;
    number: number;
  }

  const [habits, setHabits] = useState<Habits[]>(() => {
    const saved = localStorage.getItem("habits");
    if (saved) {
      try {
        return JSON.parse(saved) as Habits[];
      } catch {
        return [];
      }
    }
    return [];
  });
  

  const addHabits = () => {
    if(habitName.trim() !== ""){
      setHabits((prev) => [...prev, {name: habitName, number: 0 }]);
      setHabitName("");
    }
    setShowInput(false);

  }

  const deleteHabit = (index: number) => {
    setHabits((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCount = (index: number, delta: number) => {
    setHabits(prev => prev.map((habit, i) =>
      i === index ? { ...habit, number: habit.number + delta } : habit
    ));
  };
  

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
  

  
  
  

  return (
    <>
      <div>
        <div className= "flex flex-col h-screen w-screen p-130 gap-5 justify-center items-center">
          {habits.map((habit, i) => (
              <HabitCard 
              key={i} 
              habitName= {habit.name}
              count={habit.number}
              onIncrement={() => updateCount(i, 1)}
              onDecrement={() => updateCount(i, -1)}
              onDelete={() => deleteHabit(i)}
              ></HabitCard>
            ))}
          <button className= "text-white text-3xl font-bold bg-black border border-white"
          onClick={() => setShowInput(true)}>
            Add a Habit
          </button>

          {showInput && (
            <div className= "fixed inset-0 flex items-center justify-center bg-black/80">
              <div className= "bg-black flex rounded-2xl p-4">
                <input
                className="border-2 p-2"
                value= {habitName}
                onChange={(e) => setHabitName(e.target.value)}
                >
                </input>
                <button
                  className= "ml-2"
                  onClick={addHabits}
                >
                  Add
                </button>

              </div>
            </div>

          )}

          
        </div>
      </div>
      
    </>
  )
}

export default App
