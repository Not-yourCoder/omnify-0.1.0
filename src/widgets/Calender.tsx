"use client"
import { generateDate, months } from "@/utils/calender";
import cn from "@/utils/cn";
import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


type Props = {
    setDate: any
}
const Calendar = ({ setDate }: Props) => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    return (
        <div className="w-[20rem] bg-white z-[999] absolute mx-auto mt-10 border-2 py-4 px-2 rounded-xl">
            <div className="flex gap-10 items-center justify-between mx-4 ">
                <div className=" border p-3 rounded-lg hover:scale-105 hover:shadow-md  transition-all duration-300 ease-in-out">
                    <GrFormPrevious
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => {
                            setToday(today.month(today.month() - 1));
                        }}
                    />
                </div>
                <h1 className="select-none text-lg font-semibold">{months[today.month()]}</h1>
                <div className=" border p-3 rounded-lg hover:scale-105 hover:shadow-md  transition-all duration-300 ease-in-out">
                    <GrFormNext
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => {
                            setToday(today.month(today.month() + 1));
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-7 ">
                {days.map((day, index) => {
                    return (
                        <div
                            key={index}
                            className="text-md font-medium text-center h-14 w-14 place-content-center text-gray-500 select-none"
                        >
                            {day}
                        </div>
                    );
                })}
            </div>

            <div className=" grid grid-cols-7 ">
                {generateDate(today.month(), today.year()).map(
                    ({ date, currentMonth, today }, index) => {
                        return (
                            <div
                                key={index}
                                className=" text-center h-12 grid place-content-center text-md font-medium"
                            >
                                <h1
                                    className={cn(
                                        currentMonth ? "" : "text-gray-400",
                                        today ? "bg-gray-300 text-[rgb(0,0,0)]" : "",
                                        selectDate.toDate().toDateString() ===
                                            date.toDate().toDateString()
                                            ? "bg-black text-white"
                                            : "",
                                        "h-10 w-10 rounded-xl grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                                    )}
                                    onClick={() => {
                                        setDate(date.toDate().toDateString());
                                        setSelectDate(date);
                                    }}
                                >
                                    {date.date()}
                                </h1>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}
export default Calendar;