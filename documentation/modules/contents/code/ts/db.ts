import {Error404} from "./views/error-404";


/*starting*/
import {DocsIntro} from "@beyond/docs/docs/starting/intro.code";
import {QuickStart} from "@beyond/docs/docs/starting/quick-start.code";
import {DevServer} from "@beyond/docs/docs/foundations/dev-server.code";
import {
    TutorialIntro,
    TutorialBridge,
    TutorialBackend,
    TutorialFirstModule,
    TutorialRouting
} from "@beyond/docs/docs/starting/tutorial.code";
import {DashboardPage} from "@beyond/docs/docs/starting/dashboard.code";

/*basic*/
//projects
import {
    ProjectsIntro,
    ProjectJson,
    ProjectCreate,
    ProjectImports,
    ProjectStructure,
    ProjectDependencies
} from "@beyond/docs/docs/basic/projects.code";

// modules
import {ModulesIntro, ModulesCreate, StylesModules, ModulesConfig} from "@beyond/docs/docs/basic/modules.code";
import {Bundles} from "@beyond/docs/docs/basic/bundles.code";


//widgets
import {

    WidgetsDefinition,
    WidgetLayout,
    WidgetPage,
    Widgets,
    WidgetController
} from "@beyond/docs/docs/basic/widgets/intro.code";

import {WidgetsRendering} from "@beyond/docs/docs/basic/widgets/rendering.code";


import {BackendPage} from "@beyond/docs/docs/basic/backend.code";
import {RoutingPage} from "@beyond/docs/docs/basic/routing.code";

import {DeploymentPage} from "./basic/deployment";
//styles
import
{
    StylesImportsPage, StylesModulesPage,
    StylesTemplatePage, StylesThemePage
} from "@beyond/docs/docs/basic/styles.code";

import {StateManagement} from "@beyond/docs/docs/basic/state.code";


// /*fundamentals*/

import {Processors} from "@beyond/docs/docs/basic/processors.code";
import {BEEPage} from "@beyond/docs/docs/foundations/bee.code";
import {HMRPage} from "@beyond/docs/docs/foundations/hmr.code";
import {DistributionsPage} from "@beyond/docs/docs/foundations/distributions.code";

/*API*/
import {APIURI} from "./api/uri";
import {BeyondWidgetApi} from "./api/beyond-widget-api";
import {IWidgetStore} from "./api/i-widget-store";


interface IReturn {
    id: string,
    control: () => JSX.Element
}

export const getContent = (contentId: string, sub: string | undefined = undefined): IReturn => {


    const starting = {
        intro: DocsIntro,
        'quick-start': QuickStart,
        dashboard: DashboardPage,
        tutorial: {
            start: TutorialIntro,
            'first-module': TutorialFirstModule,
            backend: TutorialBackend,
            bridge: TutorialBridge,
            routing: TutorialRouting
        },
    }
    const basics = {
            projects: {
                intro: ProjectsIntro,
                create: ProjectCreate,
                structure: ProjectStructure,
                json: ProjectJson,
                import: ProjectImports,
                dependencies: ProjectDependencies,
            },
            modules: {
                introduction: ModulesIntro,
                create: ModulesCreate,
                json: ModulesConfig
            },
            bundles: Bundles,
            widgets: {
                default: Widgets,
                definition: WidgetsDefinition,
                controller: WidgetController,
                layout: WidgetLayout,
                page: WidgetPage,
                rendering: WidgetsRendering,
            },
            state: {
                management: StateManagement
            },
            styles: {
                template: StylesTemplatePage,
                modules: StylesModulesPage,
                imports: StylesImportsPage,
                themes: StylesThemePage,
            },
            routing: RoutingPage,
            backend: BackendPage,

        }
    ;
    const foundations = {

        processors: Processors,
        'dev-server': DevServer,
        // glossary: Glossary,
        foundations: {
            bee: BEEPage,
            hmr: HMRPage,
            distributions: DistributionsPage
        }
        // multilanguage: MultiLanguage,
    }
    const api = {
        api: {
            uri: APIURI,
            BeyondWidget: BeyondWidgetApi,
            iWidgetStore: IWidgetStore,
        }
    }
    const contents = {
        ...starting,
        ...basics,
        ...foundations,
        ...api,

        error404: Error404,
    };

    if (!contents.hasOwnProperty(contentId) || sub && !contents[contentId].hasOwnProperty(sub)) {
        return {id: contentId, control: contents.error404};
    }
    if (!contents[contentId]) {
        console.log('error', contents[contentId], contentId, contents)
        return Error404;
    }
    // the constructor is 'Object' when the contents[contentId] value is a plain object of subitems on contents.
    if (contents[contentId].constructor.name === 'Object' && !sub) {
        return {id: contentId, control: contents[contentId].default};
    }

    return {id: contentId, control: sub ? contents[contentId][sub] : contents[contentId]};

}
