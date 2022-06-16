import * as React from 'react';

import {TutorialHomeForm} from "./form";
import {TutorialHomeStyles} from "./styles";
import {TutorialFirstModuleIntro} from "./intro";

export /*bundle*/ function TutorialFirstModule() {
    return (
        <>

            <TutorialFirstModuleIntro/>
            <TutorialHomeForm/>
            <TutorialHomeStyles/>
        </>
    )
}
