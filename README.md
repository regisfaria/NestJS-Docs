# NestJS Documentation

## Overview

While I was working I got a request to create a documentation on NestJS APIs

This repository is born out of that request, hosting the code I've created while learning how to use **swagger** with **nestjs**.

I also explored some usage of **JSDocs** and it's integration with nestjs & swagger-ui!

As an extra mark, I have also tried out a bit **Compodoc**, which generates an automatic documentation, with source code, diagrams and other cool stuff. It's also worth to mention that it also reads JSDocs comments and add to it's doc page.

All endpoints were created using NestJS command: `nest g resource <resource_name>`

## Installation & Running

You will need the latest LTS version of **Node** and **NPM**, then run:

`> npm install`

After that you will be able to run the API with:

`> npm run start:dev`

And the documentation will be available at: **http://localhost:3000/docs** (FYI: This is where the **Swagger docs** is hosted)

To access the **Compodoc documentation** you'll need to run the following command:

`> npx @compodoc/compodoc -p tsconfig.json -s`

The documentation will then be hosted at: **http://127.0.0.1:8080**

## Contact

Email: *regisprogramming@gmail.com*

[LinkedIn](https://www.linkedin.com/in/regissfaria/) Profile

[GitHub](https://github.com/regisfaria) Profile

[GitLab](https://gitlab.com/regisfaria) Profile
