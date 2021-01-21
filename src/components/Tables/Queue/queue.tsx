import React, {FC, useEffect} from "react";

import Table from "./QueueTable/queueTable";
import {jsonArrayEqual} from "../../../utilities/arrayUtilities";
import LoadingSpinner from "../../UI/LoadingSpinner/loadingSpinner";
import useInterval from "../../../hooks/useInterval";
import usePreviousState from "../../../hooks/usePreviousState";
import useSound from "use-sound";

const notificationSound = require("../../../assets/sounds/hellothere.mp3");

type Props = {
    isAuthenticated: boolean;
    userRoles: Array<string>;
    queueData: Array<IQueueEntity>;
    loading: boolean;
    error: string | null;
    deleteQueueEntity: Function;
    confirmDoneEntity: Function;
    pollingFunction: Function
}

const Queue: FC<Props> = (props) => {
    const [play] = useSound(notificationSound)
    const previousQueue = usePreviousState(props.queueData) as unknown as Array<IQueueEntity>

    //Use effect only to be triggered when the component is first rendered.
    useEffect(() => {
        props.pollingFunction();
    }, [])

    //Make the LandingPage update a 5 second interval
    useInterval(() => {
        props.pollingFunction()
    }, 5000);

    //Play a notification sound if a new person has been added to the queue
    useEffect(() => {

        //Due to the API taking a few ms to respond, previousQueue will be undefined in the first render cycle.
        if (previousQueue && props.isAuthenticated) {
            if (props.queueData.length >= previousQueue.length) {
                if (!jsonArrayEqual(props.queueData, previousQueue)) {
                    play();
                }
            }
        }
    }, [props.queueData, props.isAuthenticated])

    /* ----- Create Table ----- */
    let table = props.queueData === undefined ? <LoadingSpinner/> : <Table
        defaultColumns={["Plassering", "Navn", "Emne", "Arena"]}
        loggedInColumns={["Handlinger"]}
        queueData={props.queueData}
        isAuthenticated={props.isAuthenticated}
        userRoles={props.userRoles}
        confirmDoneEntity={props.confirmDoneEntity}
        deleteQueueEntity={props.deleteQueueEntity}
    />;

    return (
        <>
            {table}
        </>
    );

}

export default Queue