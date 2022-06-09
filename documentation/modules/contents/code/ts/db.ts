import {WhatIs} from "./views/what-is/what-is";
import {Concepts} from "./views/concepts/concepts";
import {Error404} from "./views/error-404";

import {Example} from "./views/example";
import {Server} from "./views/concepts/server/index";
/*starting*/
import {Intro} from "./starting/intro";
import {QuickStart} from "./starting/quick-start";
import {TutorialPage} from "./starting/tutorial/tutorial-page";
import {DashboardPage} from "./starting/dashboard";

/*basic*/
//projects
import {ProjectsPage} from "./basic/projects";
import {ProjectJson} from "./basic/projects/project-json";
import {ManageProject} from "./basic/projects/manage";
import {ImportProject} from "./basic/projects/import";
import {ProjectStructure} from "./basic/projects/structure";
import {ProjectDependencies} from "./basic/projects/dependencies";
// modules
import {ModuleIntro} from "./basic/modules/intro";
import {ModuleConfig} from "./basic/modules/config";
import {Bundle} from "./basic/modules/bundle";

//widgets
import {Widgets} from "./basic/widgets";
import {LayoutWidget} from "./basic/widgets/types/layout";
import {PageWidget} from "./basic/widgets/types/page";
import {WidgetCreation} from "./basic/widgets/creation";
import {WidgetController} from "./basic/widgets/controller";

import {Backend} from "./basic/backend";
import {FetchingDAtaPage} from "./basic/fetching";
import {RoutingPage} from "./basic/routing";
import {DeploymentPage} from "./basic/deployment";
//styles
import {TemplatePage} from "./basic/projects/template";
import {StylesPage} from "./basic/styles";
import {ThemesPage} from "./basic/styles/themes";


import {StateManagement} from "./basic/state-management";
import {RenderingPage} from "./basic/rendering";


/*fundamentals*/
import {WhyBeyond} from "./fundamentals/why";
import {BEE} from "./fundamentals/bee";
import {HMR} from "./fundamentals/hmr";
import {Processors} from "./fundamentals/processors";
import {DevServer} from "./fundamentals/dev-server";
import {NpmPackages} from "./fundamentals/npm-packages";


/*API*/
import {APIURI} from "./api/uri";
import {BeyondWidgetApi} from "./api/beyond-widget-api";
import {ModulesCreate} from "./basic/modules/create";
import {StylesImports} from "./basic/styles/imports";
import {StylesModules} from "./basic/styles/tpl/modules";


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
                structure: ProjectStructure,
                json: ProjectJson,
                import: ImportProject,
                dependencies: ProjectDependencies,
            },
            modules: {
                introduction: ModuleIntro,
                create: ModulesCreate,
                json: ModuleConfig
            },
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
            styles: {
                template: StylesPage,
                module: StylesModules,
                imports: StylesImports,
                themes: ThemesPage,
            },
            routing: RoutingPage,

            template: TemplatePage,
            backend: Backend,
            rendering: RenderingPage,
            deployment: DeploymentPage
        }
    ;
    const foundations = {
        bee: BEE,
        hmr: HMR,
        processors: Processors,
        'dev-server': DevServer,
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
        fetching: FetchingDAtaPage,
        error404: Error404,
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
