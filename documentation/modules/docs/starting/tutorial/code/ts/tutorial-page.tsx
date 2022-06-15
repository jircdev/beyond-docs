import * as React from 'react';

import {ModuleReview} from "./module-review";
import {BridgeSection} from "./bridge-section";
import {TutorialIntro} from "./intro";

import {HomeModule} from "./home-module";
import {TRouting} from "./t-routing";

export function /*bundle*/ TutorialPage() {
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
