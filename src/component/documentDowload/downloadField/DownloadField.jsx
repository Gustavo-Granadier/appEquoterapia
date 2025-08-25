import "./DownloadField.css";
import { BsDownload } from "react-icons/bs";

const DownloadField = ({ document }) => {
    return (
        <div className="field">
            <p>{document}</p>
            <button className="download">Download <BsDownload /></button>
        </div>
    );
};

export default DownloadField;
