import {WhatIs} from "./views/what-is/what-is";
import {WhyBeyond} from "./fundamentals/why";
import {DashboardPage} from "./views/dashboard/dashboard";
import {Intro} from "./views/intro";
import {Example} from "./views/example";
import {Starting} from "./views/starting/starting";
import {TutorialPage} from "./views/tutorial/tutorial-page";
import {Concepts} from "./views/concepts/concepts";
import {Install} from "./basic/install";
import {Error404} from "./views/error-404";
import {ModuleConfig} from "./views/concepts/module/config";
import {ProjectJson} from "./views/concepts/project-json/project-json";
import {Server} from "./views/concepts/server/index";
import {NpmPackages} from "./fundamentals/npm-packages";
import {ModuleIntro} from "./views/concepts/module/module-intro";

import {WidgetsPage} from "./basic/widgets/widgets";

import {FetchingDAtaPage} from "./basic/fetching";
import {SSRPage} from "./basic/ssr";
import {RoutingPage} from "./basic/routing";
import {Backend} from "./basic/backend";
import {Bundle} from "./views/concepts/module/bundle";
import {BEE} from "./fundamentals/bee";
import {HMR} from "./fundamentals/hmr";
import {DeploymentPage} from "./basic/deployment";
import {TemplatePage} from "./basic/styles/template";
import {StylesPage} from "./basic/styles/styles";
import {ThemesPage} from "./basic/styles/themes";
import {StateManagement} from "./basic/state-management";


interface IReturn {
    id: string,
    control: () => JSX.Element
}

export const getContent = (contentId: string, sub: string | undefined = undefined): IReturn => {


    const starting = {
        intro: Intro,
        install: Install,
        dashboard: DashboardPage,
        tutorial: {
            web: TutorialPage
        },
    }
    const basics = {
        projects: ProjectJson,
        modules: ModuleIntro,
        bundles: Bundle,
        widgets: WidgetsPage,
        stateManagement: StateManagement,
        routing: RoutingPage,
        styles: StylesPage,
        themes: ThemesPage,
        backend: Backend,
        ssr: SSRPage,
        deployment: DeploymentPage
    };
    const foundations = {
        bee: BEE,
        hmr: HMR,
    }
    const contents = {
        ...starting,
        ...basics,
        ...foundations,
        template: TemplatePage,
        fetching: FetchingDAtaPage,
        'what-is-beyond': WhatIs,
        'why-beyond': WhyBeyond,
        default: Example,
        Starting: Starting,
        'npm-packages': NpmPackages,
        concepts: {
            basics: Concepts,
        },
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


    let Control: () => JSX.Element = contents.hasOwnProperty(contentId) ? contents[contentId] : contents.error404;
    if (sub) {
        Control = Control.hasOwnProperty(sub) ? Control[sub] : contents.error404;
    }
    return {id: contentId, control: Control};
}
