export interface IConfig {
    server: ServerConfig,
    db: DbConnection
}

interface DbConnection {
    urls: string,
    replicaName: string,
    user: string,
    pass: string,
}

interface ServerConfig {
    port: number,
}
