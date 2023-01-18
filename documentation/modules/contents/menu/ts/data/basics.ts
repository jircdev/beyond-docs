import { structureItems } from "./structure-item";

const projects = [
    "projects/intro",
    "projects/create",
    "projects/structure",
    "projects/json",
    "projects/import",
    "projects/dependencies",
];
const modules = ["modules/introduction", "modules/create", "modules/json"];

const styles = ["styles/template", "styles/modules", "styles/themes", "styles/imports"];
const widgets = [
    "widgets",
    "widgets/definition",
    "widgets/controller",
    "widgets/page",
    "widgets/layout",
    "widgets/rendering",
];

const general = structureItems([
    ["projects", structureItems(projects)],
    ["modules", structureItems(modules)],

    "bundles",
    "processors",
    "template",
    ["widgets", structureItems(widgets)],
    "routing",
    "state/management",

    ["styles", structureItems(styles)],
]);
export const basics = {
    id: "concepts",
    children: general,
};
