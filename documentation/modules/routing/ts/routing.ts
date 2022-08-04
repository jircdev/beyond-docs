import {routing} from "@beyond-js/kernel/routing";


const data = new Map();

routing.redirect = async function redirect(uri): Promise<string> {

};

routing.missing = async (pathname: String) => {
    return 'app-docs-missing';
}

routing.setup();
