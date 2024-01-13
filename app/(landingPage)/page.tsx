import React from 'react'

interface TodosType{
    
    task: string;
    status: string;
}

const read_data =async () => {
    const res = await fetch('/api/post')
    const data: TodosType[]  = await res.json()
    return data;
}

const Home = async () => {
const todo= await read_data()
    

  return (
    <div>
     {/* Calling todos using map function */}
     {
            todo.map((todos) => (
                <div key={todos.task}>
                    {todos.task}</div>
            ))
        }

    </div>
  )
}

export default Home

