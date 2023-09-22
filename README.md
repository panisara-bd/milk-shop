# milk-shop

This milk-shop is a spin-off of the milk-shop which was part of
[pgp-salt-labs](https://github.com/panisara-bd/pgp-salt-labs).

It is a proof of concept for a service written with GraphQL and Postgres instead of
express REST and Mongo. The front-end has been adapted to call the new GraphQL service.

## Features
- View all products
- Pagination
- Filter and search
- Go to a particular milk page, select the amount in liters and add to cart

## Useful commands

For running the database migrations or for generating new migrations after the prisma
schema has been updated:
```shell
npm prisma migrate dev --name add-some-table
```

The previous command will also seed the database, but if you want to seed the database
again, you can run:
```shell
npm prisma db seed
```
