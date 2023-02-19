## Authentication - Authorization Microservice

- `npx sequelize init` For Initializing ORM ( Object Relational Mapping ) !!

- Generate Model and Migration file of User
```npx sequelize model:generate  --name User --attributes email:string,password:string```

- Create Database Using Sequelize-cli
    `npx sequelize db:create`

- Migration from development to Database
    `npx sequeize db:migrate`