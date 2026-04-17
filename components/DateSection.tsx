
type Props = {
    selectedDate: number;
    days: string[]
    dates: number[]
    setSelectedDate: (date: number) => void;
};
export default function DateSection({
    selectedDate,
    setSelectedDate,
    days,
    dates,
}: Props) {

    const changeDate = (date) => {
        setSelectedDate(date)

    }


    return (
        <div className="my-2">
            <div className="flex flex-col">

                {/* days row */}
                <div className="flex w-full">
                    {days.map((day, index) => (
                        <div key={index} className="flex-1 text-center">
                            {day}
                        </div>
                    ))}
                </div>

                {/* dates row */}
                <div className="flex w-full mt-2">
                    {dates.map((date, index) => {

                        return (
                            <div key={index} className="flex-1 flex justify-center">
                                <div
                                    className={` cursor-pointer
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${date === selectedDate
                                            ? "bg-accent-1 text-black"
                                            : "border border-accent-2 text-black"}
                  `
                                    }
                                    onClick={() => changeDate(date)}
                                >
                                    {date}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}