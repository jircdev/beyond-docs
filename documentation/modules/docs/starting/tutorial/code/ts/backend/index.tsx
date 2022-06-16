import * as React from 'react';
import {TutorialBackendLogic} from "./logic";
import {TutorialBackendStructure} from "./structure";

export /*bundle*/ function TutorialBackend() {
    return (
        <>
            <TutorialBackendLogic/>
            <TutorialBackendStructure/>
        </>
    )
}
