import * as React from 'react';
import {CreateProject} from "./create-project";
import {CreateModule} from "./create-module";
import {ModuleReview} from "./module-review";
import {BridgeSection} from "./bridge-section";
import {TutorialIntro} from "./intro";

export function TutorialPage() {
    return (
        <div className="content">
            <TutorialIntro/>
            <CreateProject/>
            <CreateModule/>
            <ModuleReview/>
            <BridgeSection/>
        </div>
    )
}
