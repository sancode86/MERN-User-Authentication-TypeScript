# MERN User Authentication TypeScript

![MERN TypeScrypt](https://raw.githubusercontent.com/sancode86/MERN-User-Authentication-TypeScript/master/client/public/mern.png)

Simple template/example of user authentication.
Using Mongodb, Express, ReactJs and NodeJs with TypeScript.
(With 'Functional Components')

## Usage

1. First in each project folder run: npm install.

2. Change connection string in 'server\src\index.ts' if you need to.

```javascript
mongoose.connect(
  "mongodb://localhost:27017",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: Error) => {
    if (err) throw err;

    console.log("Conectado a Mongo DB 😃");
  }
);
```

3. Inicializate client & server from each directory:

/client --> npm run

/server --> npm run

That's it! Have a great day 🙃
