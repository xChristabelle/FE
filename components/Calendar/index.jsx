import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "prev,next", 
        center: "title",
        end: "dayGridMonth,timeGridDay", 
      }}
      events={[
        { title: "event 1", date: "2023-12-01" },
        { title: "event 2", date: "2023-12-02" },
      ]}
      height="50vh"
    />
  );
};

export default Calendar;
