import {WhatIs} from "./views/what-is/what-is";
import {WhyBeyond} from "./fundamentals/why";
import {DashboardPage} from "./views/dashboard/dashboard";
import {Intro} from "./views/intro";
import {Example} from "./views/example";
import {Starting} from "./views/starting/starting";
import {TutorialPage} from "./views/tutorial/tutorial-page";
import {Concepts} from "./views/concepts/concepts";
import {Install} from "./views/starting/install";
import {Error404} from "./views/error-404";
import {ModuleConfig} from "./views/concepts/module/config";
import {ProjectJson} from "./views/concepts/project-json/project-json";
import {Server} from "./views/concepts/server/index";
import {NpmPackages} from "./fundamentals/npm-packages";
import {ModuleIntro} from "./views/concepts/module/module-intro";

import {WidgetsPage} from "./basic/widgets/widgets";
import {StylesPage} from "./basic/styles";
import {FetchingDAtaPage} from "./basic/fetching";
import {SSRPage} from "./basic/ssr";
import {RoutingPage} from "./basic/routing";
import {Backend} from "./basic/backend";


interface IReturn {
    id: string,
    control: () => JSX.Element
}

export const getContent = (contentId: string, sub: string | undefined = undefined): [IReturn] => {

    const contents = {
        projects: ProjectJson,
        widgets: WidgetsPage,
        styles: StylesPage,
        fetching: FetchingDAtaPage,
        ssr: SSRPage,
        routing: RoutingPage,
        'what-is-beyond': WhatIs,
        'why-beyond': WhyBeyond,
        dashboard: DashboardPage,
        intro: Intro,
        default: Example,
        Starting: Starting,
        backend: Backend,
        tutorial: {
            web: TutorialPage
        },
        'npm-packages': NpmPackages,
        concepts: {
            basics: Concepts,


        },
        modules: ModuleIntro,
        install: Install,
        error404: Error404,
        module: {
            into: ModuleIntro,
            config: ModuleConfig
        },
        project: {
            config: ProjectJson
        },
        server: Server,
    };


    let Control = contents.hasOwnProperty(contentId) ? contents[contentId] : contents.error404;
    if (sub) {
        Control = Control.hasOwnProperty(sub) ? Control[sub] : contents.error404;
    }
    return {id: contentId, control: Control};
}
