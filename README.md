# Rankings-UI

Web Application of [isa-rankings.org]

**Technical Overview:**
* Its [PWA]. Works offline and can be added to mobile devices as an application
* Web app is built with **React** and **Typescript**
* Its built on top of the **awesome** [react-boilerplate] (Typescript version)

* Requires knowledge on followings
    * AWS S3 and Cloudfront (hosted as static website on AWS)
    * [Styled Components]
    * and everthing the original boilerplate is designed with
    
---

# Getting Started

To start with, you must ensure all the stage specific environment variable files are present. 

There are 3 environment stages, therefore you should have three `.env` files like:

* .env.development
* .env.test
* .env.production

with valid credentials. `.env.example` is provided with dummy values. Simply replace them with real ones

### Running on local

Install dependencies

```shell
npm install
```

Start localhost

```shell
npm start
```

Web application is served at `localhost:3001/`

[isa-rankings.org]: <https://www.isa-rankings.org>
[PWA]: <https://en.wikipedia.org/wiki/Progressive_web_applications>
[Styled Components]: <https://github.com/styled-components/styled-components>
[react-boilerplate]: <https://github.com/Can-Sahin/react-boilerplate-typescript>

