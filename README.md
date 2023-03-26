A small web application that lets manage the list of showcased works for a digital worker, developed using React and Node.js.
An entry can be hidden from the portfolio and can have a link to its customer's website.

Both front-end and back-end can be run using:

```
npm run start
```

You can run the database migrations with this:

```
npx sequelize-cli db:migrate
```

And the seeders with this:

```
npx sequelize-cli db:seed:all
```

(Some) unit testing has been added using Cypress:

```
npx cypress open
```
