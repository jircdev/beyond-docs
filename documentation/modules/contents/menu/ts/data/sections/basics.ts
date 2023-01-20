import { structureItems } from "../structure-item";

const packages = ["packages/create", "packages/types", "packages/distributions", "packages/json", "packages/publish"];
const modules = ["modules/introduction", "modules/create", "modules/json"];

const general = structureItems([
    ["packages", structureItems(packages)],
    ["modules", structureItems(modules)],
    "bundles",
    "processors",
]);
export const basics = {
    id: "concepts",
    children: general,
};
