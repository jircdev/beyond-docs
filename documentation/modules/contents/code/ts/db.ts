import {WhatIs} from "./views/what-is/what-is";
import {WhyBeyond} from "./fundamentals/why";
import {DashboardPage} from "./views/dashboard/dashboard";

import {Example} from "./views/example";
import {Starting} from "./views/starting/starting";
import {TutorialPage} from "./views/tutorial/tutorial-page";
import {Concepts} from "./views/concepts/concepts";
import {Install} from "./basic/install";
import {Error404} from "./views/error-404";
import {ModuleConfig} from "./views/concepts/module/config";
import {ProjectJson} from "./basic/projects/project-json";
import {NpmPackages} from "./fundamentals/npm-packages";
import {ModuleIntro} from "./views/concepts/module/module-intro";
import {Server} from "./views/concepts/server/index";
import {Widgets} from "./basic/widgets";

import {FetchingDAtaPage} from "./basic/fetching";
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
import {RenderingPage} from "./basic/rendering";
import {Intro} from "./basic/intro";
import {ProjectsPage} from "./basic/projects";
import {Processors} from "./fundamentals/processors";
import {WidgetController} from "./basic/widgets/controller";
import {LayoutWidget} from "./basic/widgets/types/layout";
import {PageWidget} from "./basic/widgets/types/page";
import {WidgetCreation} from "./basic/widgets/creation";
import {APIURI} from "./api/uri";

import {BeyondWidgetApi} from "./api/beyond-widget-api";
import {QuickStart} from "./basic/quick-start";
import {ManageProject} from "./basic/projects/manage";
import {ImportProject} from "./basic/projects/import";


interface IReturn {
    id: string,
    control: () => JSX.Element
}

export const getContent = (contentId: string, sub: string | undefined = undefined): IReturn => {


    const starting = {
        intro: Intro,
        'quick-start': QuickStart,

        dashboard: DashboardPage,
        tutorial: {
            web: TutorialPage
        },
    }
    const basics = {
            projects: {
                intro: ProjectsPage,
                create: ManageProject,
                json: ProjectJson,
                import: ImportProject,
            },
            modules: ModuleIntro,
            bundles: Bundle,
            widgets: {
                default: Widgets,
                definition: WidgetCreation,
                controller: WidgetController,
                layout: LayoutWidget,
                page: PageWidget
            },
            state: {
                management: StateManagement
            },
            routing: RoutingPage,
            styles: StylesPage,
            themes: ThemesPage,
            backend: Backend,
            rendering: RenderingPage,
            deployment: DeploymentPage
        }
    ;
    const foundations = {
        bee: BEE,
        hmr: HMR,
        processors: Processors,
    }
    const api = {
        api: {
            uri: APIURI,
            BeyondWidget: BeyondWidgetApi
        }
    }
    const contents = {
        ...starting,
        ...basics,
        ...foundations,
        ...api,
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
        modules: {
            introduction: ModuleIntro,
            config: ModuleConfig
        },
        project: {
            config: ProjectJson
        },
        server: Server,
    };


    if (!contents.hasOwnProperty(contentId) || sub && !contents[contentId].hasOwnProperty(sub)) {
        return {id: contentId, control: contents.error404};
    }
    // the constructor is 'Object' when the contents[contentId] value is a plain object of subitems on contents.
    if (contents[contentId].constructor.name === 'Object' && !sub) {
        return {id: contentId, control: contents[contentId].default};
    }

    return {id: contentId, control: sub ? contents[contentId][sub] : contents[contentId]};

}
