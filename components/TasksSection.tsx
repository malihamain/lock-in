"use client";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  readOnly: boolean;
};

export default function TasksSection({
  tasks,
  setTasks,
  readOnly,
}: Props) {

  // ✅ toggle task
  const toggleTask = (id: number) => {
    if (readOnly) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // ✅ sort (unfinished → top)
  const sortedTasks = [...tasks].sort((a, b) => {
    return a.done === b.done ? 0 : a.done ? 1 : -1;
  });

  return (
    <div className="my-10 mx-5 flex flex-col gap-3">

      {sortedTasks.map((task) => (
        <div
          key={task.id}
          onClick={() => toggleTask(task.id)}
          className={`
            flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200
            ${readOnly ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"}
            ${
              task.done
                ? "bg-accent-1 border border-accent-1"
                : "bg-white border border-gray-300"
            }
          `}
        >

          {/* 📝 text */}
          <span
            className={`
              text-md transition
              ${task.done ? "line-through text-gray-500" : "text-black"}
            `}
          >
            {task.title}
          </span>

          {/* ✅ check */}
          <div
            className={`
              w-5 h-5 rounded-full flex items-center justify-center transition
              ${
                task.done
                  ? "bg-white text-accent-1 scale-110"
                  : "border border-accent-2"
              }
            `}
          >
            {task.done && <span className="text-xs">✓</span>}
          </div>

        </div>
      ))}

    </div>
  );
}