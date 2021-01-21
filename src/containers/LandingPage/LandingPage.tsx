import React from "react";
import QueueFormConnected from "../../components/UI/Forms/QueueForm/queueFormConnected";
import QueueConnected from "../../components/UI/Tables/Queue/queueConnected";

const LandingPage = () => {
    return (
        <>
            <QueueFormConnected/>
            <QueueConnected/>
        </>
    )
}

export default LandingPage;