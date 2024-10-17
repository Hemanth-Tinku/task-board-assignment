## Assignment Overview

# Features
1. Users can create tasks with a title, an optional description, and a status.
2. Users can modify existing tasks.
3. Users can view lists of tasks organized by status: To-Do, In Progress, In Review, and Done.
4. Users can delete tasks.
5. All tasks are cached and persisted using the browser's localStorage.

# Code Structure & Overview
The project is organized using a modular structure, following the "organisms" and "molecules" design pattern for reusable components. The code can be found in the src > app > modules directory

**Components Overview**
1. **TaskBoard**: The parent component for the task board.
2. **Column**: Represents a column that holds tasks of a specific status.
3. **TaskForm**: A form used for creating or updating task data
4. **TaskCard** - This component is used to render a specific task in column
