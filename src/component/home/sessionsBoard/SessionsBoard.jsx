import { useEffect, useRef } from "react";

import "./SessionsBoard.css";
import Month1 from "../month/Month1";

const getCurrentMonth = () => new Date().getMonth() + 1; 

const SessionsBoard = ({ months }) => {
  const currentMonth = getCurrentMonth();
  const monthsContainerRef = useRef(null);


  useEffect(() => {
    if (monthsContainerRef.current) {
      const container = monthsContainerRef.current;
      const currentMonthElement = container.querySelector(".currentMonth");

      if (currentMonthElement) {
        const containerWidth = container.offsetWidth;
        const elementWidth = currentMonthElement.offsetWidth;
        const elementLeft = currentMonthElement.offsetLeft;
        const scrollPosition = elementLeft - containerWidth / 2 + elementWidth / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [months]); 

  return (
    <div className="sessions-board">
      <div className="carousel-container">
        <div className="carousel-viewport">
          <div className="allMonth" ref={monthsContainerRef}>
            {months.map((month) => (
              <div
                key={month.id}
                className={`month-wrapper ${month.id === currentMonth ? "currentMonth" : ""}`}
              >
                <Month1 month={month.month} sessions={month.sessions} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsBoard;
