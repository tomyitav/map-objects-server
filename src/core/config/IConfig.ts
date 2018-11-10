export interface IConfig {
    db: DbConnection
}

interface DbConnection {
    urls: string,
    replicaName: string,
    user: string,
    pass: string,
}
