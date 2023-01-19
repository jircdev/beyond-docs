import { structureItems } from "../structure-item";

const projects = [
    "projects/intro",
    "projects/create",
    "projects/structure",
    "projects/json",
    "projects/import",
    "projects/dependencies",
];
const modules = ["modules/introduction", "modules/create", "modules/json"];

const general = structureItems([
    ["projects", structureItems(projects)],
    ["modules", structureItems(modules)],
    "bundles",
    "processors",
]);
export const basics = {
    id: "concepts",
    children: general,
};
