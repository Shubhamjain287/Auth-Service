## Authentication - Authorization Microservice

- `npx sequelize init` For Initializing ORM ( Object Relational Mapping ) !!

- Generate Model and Migration file of User
```npx sequelize model:generate  --name User --attributes email:string,password:string```

- Create Database Using Sequelize-cli
    `npx sequelize db:create`

- Migration from development to Database
    `npx sequeize db:migrate`

## Authorization - Using Roles

- Generate New Model for User Roles Like
    ```npx sequelize model:generate --name Role --attributes name:string```

- For Many to Many Assosiation we have to make a new through table.
for example :-
    ```-> User belongs to Many Roles
    -> Role Belongs to Many USer
    -> Sequelize Authomatically Generate the Intermidiate Table i.e `User_Roles````

- Database Migration
    ```npx sequelize db:migrate```

- DB_SYNC for SYNC Database One Time

- Generation Seeding Files For Roles
    ```npx sequelize seed:generate --name add-roles```

- Seeding Seed File to Database Using
    ```npx sequelize db:seed --seed 20230220105218-add-roles.js```

- 