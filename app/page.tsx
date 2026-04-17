"use client"

import DateSection from "../components/DateSection"
import TasksSection from "../components/TasksSection"
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
import { startOfWeek, addDays, format } from "date-fns";

export default function Home() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [1, 2, 3, 4, 5, 6, 7];
  const today = 2

  const tasks = ["stretchs", "breakkie", "workout", "coding", "svenska"]

  const [selectedDate, setSelectedDate] = useState(today)



  return (
    <div className="my-5">
      <DateSection selectedDate={selectedDate}
        setSelectedDate={setSelectedDate} days={days} dates={dates} />
      <TasksSection tasks={tasks} />
      <Footer/>
 
    </div>
  );
}
