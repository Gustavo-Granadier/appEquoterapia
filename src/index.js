import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notification from './component/notification/Notification';
import Tutorial from './component/tutorial/Tutorial';
import Login from './component/login/Login';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import ReportRequest from './component/reportRequest/ReportRequest';
import NoteWeek from './component/noteWeks/NoteWeek';
import Home from './component/home/Home';
import DocumentDownload from './component/documentDowload/DocumentDownload';
import Document from './component/document/Document';
import ComplaintSuggestion from './component/complaintSuggestion/ComplaintSuggestion';
import Faq from './component/faq/Faq';
import Number from './component/number/Number';
import Video from './component/video/Video';
import JustificativaFalta from './component/justificativaFalta/JustificativaFalta1';
import NoteList from './component/noteWeks/NoteList';
import WrittenNote from './component/noteWeks/WrittenNotes1';
import EditNote from './component/noteWeks/EditNote';
import ComplaintSuggestionList from './component/complaintSuggestion/ComplaintSuggestionList';
import ComplaintSuggestionView from './component/complaintSuggestion/ComplaintSuggestionView';
import ViewDocument from './component/document/ViewDocument';



const router = createBrowserRouter([
  // { path: "/", element: <App /> },
  { path: 'notification', element: <Notification /> },
  { path: 'tutorial', element: <Tutorial /> },
  { path: '/', element: <Login /> },
  { path: 'resquisicao', element: <ReportRequest /> },
  { path: 'novaAnotacaoes', element: <NoteWeek /> },
  { path: 'home', element: <Home /> },
  { path: 'downloadDocumento', element: <DocumentDownload /> },
  { path: 'documento', element: <Document /> },
  { path: 'reclamacoesSugestoes', element: <ComplaintSuggestion /> },
  { path: 'calendario', element: <div>Calendário</div> },
  { path: 'telefones', element: <Number /> },
  { path: 'historias', element: <Video /> },
  { path: 'faq', element: <Faq /> },
  { path: 'justificativaFalta', element: <JustificativaFalta /> },
  { path: "listaAnotacoes", element: <NoteList /> },
  { path: "anotacoesEcritas", element: <WrittenNote /> },
  { path: "editarAnotacao", element: <EditNote /> },
  { path: "listaAnotacoesEditarAnotacao", element: <ComplaintSuggestionList /> },
  { path: "vizualisacaoReclamacaoSugestao", element: <ComplaintSuggestionView /> },
  { path: "visualizarDocumento", element: <ViewDocument /> }
], {
  basename: process.env.PUBLIC_URL,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
