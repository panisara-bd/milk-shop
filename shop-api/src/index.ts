import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers';
import { schema } from './schema';

const main = async () => {
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
      });
    
      const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
      });
      
      console.log(`🚀  Server ready at: ${url}`);
}

main()

