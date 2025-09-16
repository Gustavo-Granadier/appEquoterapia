import React from 'react'
import './ComplaintSuggestionList.css'
import MenuBar from "../menuBar/MenuBar";
import NavBar from "../navBar/NavBar";
import SendComplainSuggestion from './cardComplainSuggestion/SendComplainSuggestion';
import NewComlainSuggestion from './cardComplainSuggestion/NewComlainSuggestion';

const complaints = [
    { id: 1, name: "22/07/2025" },
    { id: 2, name: "27/07/2025" },
    { id: 3, name: "10/08/2025" },
    { id: 4, name: "11/08/2025" },
];

const ComplaintSuggestionList = () => {
    return (
        <div>
            <NavBar />
            <div className="complaintSuggestionList-container">
                <div className="complaintSuggestionList-content">
                    <h1>Reclamações e Sugestões</h1>
                    <div className="complaintSuggestionList-list">
                        {complaints.map((complaint) => {
                            return <SendComplainSuggestion key={complaint.id} message={complaint.name} />;
                        })}
                        <NewComlainSuggestion />
                    </div>
                    <p className="complaintSuggestionList-footer">Fim das reclamações e sugestões</p>
                </div>
            </div>
            <MenuBar />
        </div>
    );
}
export default ComplaintSuggestionList