import {ApolloServer} from 'apollo-server-lambda';
import schema from "./graphql/schema/schema";
import {AppContext} from "./interfaces/AppContext";
import {Injectable, Injector} from "injection-js";
import {MessengerModel} from "./model/messenger/MessengerModel";

@Injectable()
export class Server {

    private apolloServer: ApolloServer;
    private context: AppContext;

    public initContext(injector: Injector) {
        this.context = this.getAppContext(injector);
    }

    public initServer(injector: Injector) {
        this.initContext(injector);
        console.info('Starting graphql server...');
        this.createApolloServer();
    }

    public getApolloInstance(): ApolloServer {
        return this.apolloServer;
    }

    private getAppContext(injector: Injector): AppContext {
        return {
            messengersModel: injector.get(MessengerModel),
        }
    }

    private createApolloServer() {
        const graphqlRoutePrefix = process.env.IS_OFFLINE ? '' : '/prod';
        this.apolloServer = new ApolloServer({
            schema,
            context: this.context,
            playground: {
                endpoint: graphqlRoutePrefix + '/graphql'
            }
        });
    }
}