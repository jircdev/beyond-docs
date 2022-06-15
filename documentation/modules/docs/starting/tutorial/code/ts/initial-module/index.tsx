import * as React from 'react';
import {TutorialIntro} from "../intro";
import {TutorialHomeForm} from "./form";
import {TutorialHomeStyles} from "./styles";

export /*bundle*/ function TutorialInitialModule() {
    return (
        <>

            <TutorialIntro/>
            <TutorialHomeForm/>
            <TutorialHomeStyles/>
        </>
    )
}
