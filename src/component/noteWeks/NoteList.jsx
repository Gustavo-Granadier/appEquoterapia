import React from 'react'
import "./NoteList.css";
import MenuBar from "../menuBar/MenuBar";
import NavBar from "../navBar/NavBar";
import New from './cards/New';
import Send from './cards/Send';

const notes = [
    { id: 1, name: "22/07/2025" },
    { id: 2, name: "27/07/2025" },
    { id: 3, name: "10/08/2025" },
    { id: 4, name: "11/08/2025" },
];

const NoteList = () => {
    return (
        <div>
            <NavBar />
            <div className="note-container">
                <div className="note-content">
                    <h1>Anotações</h1>
                    <div className="note-list">
                        {notes.map((note) => {
                            return <Send key={note.id} note={note.name} />;
                        })}
                        <New />
                    </div>
                    <p className="note-footer">Fim das anotações</p>
                </div>
            </div>
            <MenuBar />
        </div>
    );
};

export default NoteList