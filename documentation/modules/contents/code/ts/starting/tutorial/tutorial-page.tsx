import * as React from 'react';
import {CreateProject} from "./create-project";
import {CreateModule} from "./create-module";
import {ModuleReview} from "./module-review";
import {BridgeSection} from "./bridge-section";
import {TutorialIntro} from "./intro";
import {TDashboard} from "./dashboard";
import {HomeModule} from "./home-module";
import {TRouting} from "./t-routing";

export function TutorialPage() {
    return (
        <div className="content">
            <TutorialIntro/>

            <HomeModule/>
            <ModuleReview/>
            <BridgeSection/>
            <TRouting/>
        </div>
    )
}
