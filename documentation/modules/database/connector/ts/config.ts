interface IConnection {
    host: string,
    user: string,
    password: string,
    database: string,
    dateStrings: boolean,
    timezone: string
}

interface IConfig {
    development?: IConnection,
    production?: IConnection
}

export /*bundle*/
function Config(env: string = 'development') {
    const config: IConfig = {
        development: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'beyond_docs',
            dateStrings: true,
            timezone: '-04:00'
        }
    }
    return config[env];

}
