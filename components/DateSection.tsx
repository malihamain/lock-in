
import { format, isSameDay } from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


type Props = {
    selectedDate: Date;
    weekDates: Date[]
    setSelectedDate: (date: Date) => void;
};


export default function DateSection({
    selectedDate,
    setSelectedDate,
    weekDates,

}: Props) {

    const changeDate = (date) => {
        setSelectedDate(date)
    }


    return (
        <div className="my-2 flex w-full justify-between">
            <button
                // onClick={() => setCurrentDate(addDays(currentDate, -7))}
                className="text-accent-2 text-xl hover:scale-110 transition"
            >
                <FiChevronLeft />
            </button>

            <div className="flex">

                {/* days row */}
                <div className="flex w-full">
                    {weekDates.map((d, i) => (
                        <div key={i} className="mx-1 text-center" >
                        <div >
                            {format(d, "EEE").toUpperCase()}
                        </div>
                         <div key={i} className="flex justify-center">
                                <div
                                    className={` cursor-pointer
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${isSameDay(d, selectedDate)
                                            ? "bg-accent-1 text-black"
                                            : "border border-accent-2 text-black"}
                  `
                                    }
                                    onClick={() => changeDate(d)}
                                >
                                    {format(d, "d")}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             

            </div>
              <button
                // onClick={() => setCurrentDate(addDays(currentDate, -7))}
                className="text-accent-2 text-xl hover:scale-110 transition"
            >
                <FiChevronRight />
            </button>
        </div>
    );
}