import * as dayjs from 'dayjs';
import {join} from 'path';
import {promises, existsSync} from "fs";
import {beyond} from '@beyond-js/kernel/core';

export class Logs {
    days: number;
    logs: string;
    calls: string;
    errors: string;
    current: string;

    #ready: boolean;
    #dirname;

    constructor() {
        this.days = 3;
        this.#dirname = join(__dirname, "logs")
    }

    async start() {
        try {
            const directories = ['../../calls', '../../errors'];
            let prs = [];
            directories.forEach(directory => prs.push(this.#checkFiles(join(this.#dirname, directory))));
            await Promise.all(prs);
            this.#ready = true;
        } catch (e) {
            console.error(e);
        }
    }

    async #checkFiles(folder) {
        if (!existsSync(folder)) {
            return promises.mkdir(folder, {recursive: true});
        }
        const files = await promises.readdir(folder);
        /**
         * if exists file into the folder with more time than the number of days defined
         * then we delete them
         */
        files.forEach(file => {
            const currentTime = dayjs();
            // the file name is the day when the file was created.
            const filename = file.split('.')[0];
            const fileMoment = dayjs(filename, 'DD-MM-YYYY');
            const diff = currentTime.diff(fileMoment, 'days');
            if (diff >= this.days) {
                promises.unlink(`${folder}/${file}`);
            }

        })
    }

    async write(type, data) {
        const current = dayjs().format('DD-MM-YYY');
        const date = dayjs().format('DD-MM-YYYY HH:mm');
        let text = `--------------------------\nExecute: ${date} \n--------------------------\n\t`;
        text += `${data}\n\n`;
        try {
            await promises.appendFile(`${type}/${current}.log`, text);
        } catch (error) {
            console.error(`Error saving log "${type}"`);
            console.error(error.stack);
        }

    }

    validateData(folder, files) {

        // files.forEach(file => {
        //     const currentMoment = dayjs();
        //     const fileName = file.split('.')[0];
        //     const fileMoment = dayjs(fileName).format('DD-MM-YYYY');
        //
        //     const diff = Math.floor(currentMoment.diff(fileMoment, 'hours') / 24);
        //
        //     if (diff >= this.days) {
        //         unlink(`${folder}/${file}`, () => {
        //             //    Clean old log files
        //         });
        //     }
        // });
    }


    call(data) {
        // this.write(this.calls, data);
    }

    error(data) {
        // this.write(this.errors, data);
    }

}
