"use client"

import DateSection from "../components/DateSection"
import TasksSection from "../components/TasksSection"

import { useState } from "react";
import { startOfWeek, addDays, isSameDay } from "date-fns";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "stretchs", done: false },
    { id: 2, title: "breakkie", done: false },
    { id: 3, title: "workout", done: false },
    { id: 4, title: "coding", done: false },
    { id: 5, title: "svenska", done: false },
  ]);
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState(today)

  const readOnly = !isSameDay(today, selectedDate)

  const startDate = startOfWeek(new Date(), { weekStartsOn: 0 });

  const weekDates = Array.from({ length: 7 }, (_, i) =>
    addDays(startDate, i)
  );




  return (
    <div className="my-5">
      <DateSection selectedDate={selectedDate}
        setSelectedDate={setSelectedDate} weekDates={weekDates} />
      <TasksSection
        tasks={tasks}
        setTasks={setTasks}
        readOnly={readOnly}
      />
    </div>
  );
}
