import { StarWarsSchema } from "./starwars/starWarsSchema";
import express, {Request, Response} from 'express';
import {graphqlHTTP} from 'express-graphql';
import { buildSchema, printSchema } from 'graphql'

const app = express();
app.use('/graphql', graphqlHTTP({
schema: StarWarsSchema,
}));
app.use('/schema', (req: Request, res: Response) => {
    res.send(printSchema(StarWarsSchema));
  });
app.listen(4000);

console.log('Server ready at http://localhost:4000/graphql');
