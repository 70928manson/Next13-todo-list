import { ITask } from '@/types/tasks';
import React from 'react';
import Task from './Task';

interface TodoListProps {
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
        <thead className='bg-gray-200'>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { tasks.length > 0 && tasks.map((task) => {
            return (
              <Task key={task.id} task={task}/>
            )
          }) }
        </tbody>
      </table>
    </div>
  )
}

export default TodoList