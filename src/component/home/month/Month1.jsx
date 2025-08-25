import "./Month1.css";

const getCurrentMonth = () => new Date().getMonth() + 1;

const Month1 = ({ month, sessions }) => {
    const isCurrentMonth = month === getCurrentMonth();

    return (
        <div className={`month ${isCurrentMonth ? "current-month" : ""}`}>
            <h4>{month}</h4>
            {sessions.map((session) => (
                <p key={session.id}>
                    Dia {session.date} Sessão às {session.time}
                </p>
            ))}
        </div>
    );
};

export default Month1;
