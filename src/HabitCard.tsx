

interface CardProps{
  habitName: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
  className?: string;
}

function HabitCard({ habitName, count, onIncrement, onDecrement, onDelete, className } : CardProps){

    

    return(
        <div>
            <div className= "flex flex-row">
                <div className= {`flex flex-col rounded-2xl shadow-lg bg-black border border-white text-center p-6 ${className}`}>
                    <h1 className= "text-white, text-3xl font-bold mb-4"> 
                        {habitName}
                    </h1>
                    <div className= "flex text-white, text-5xl font-bold justify-center items-center">
                        <div className="flex flex-row gap-6">
                            <button className= "border border-white rounded-2xl flex text-white" onClick={onDecrement}>-</button>
                            <div  className=  "flex text-center justify-center items-center text-white" >{count}</div>
                            <button className= "border border-white rounded-2xl flex text-white" onClick={onIncrement}>+</button>
                        </div>
                    </div>
                </div>
                <button 
                onClick={onDelete} 
                className="text-white bg-transparent text-xl font-bold px-2"
                >
                X
                </button>
            </div>
           
        </div>

    );
}

export default HabitCard;