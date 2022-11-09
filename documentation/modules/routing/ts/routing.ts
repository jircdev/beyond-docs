import {routing} from "@beyond-js/kernel/routing";

routing.missing = async (pathname: String) => {
    return 'app-docs-missing';
}