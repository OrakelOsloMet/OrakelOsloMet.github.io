import React from "react";
import {FILE_DOWNLOAD_CONFIG, FILE_INSTANCE as axios} from "../../../axiosAPI";
import {SubmitButton} from "../../UI/Buttons/buttons";
import {QUEUE_EXPORT_PATH} from "../../../constants/constants";

const QueueExportForm = () => {

    const getQueueExport = () => {
        axios.get(QUEUE_EXPORT_PATH)
            .then(response => {
                FILE_DOWNLOAD_CONFIG("csv", "queueData", response.data);
            })
    }

    return (
        <div style={{margin: "auto"}}>
            <SubmitButton onClick={getQueueExport}>Export</SubmitButton>
        </div>);
};

export default QueueExportForm;