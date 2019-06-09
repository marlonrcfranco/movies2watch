# movies2watch
Project of the discipline of Advanced Topics in Internet Systems of the Universidade Federal do Rio Grande - FURG

## How to run
1. Clone the Project
2. In the project directory, run the following commands:

```
$ npm install
$ npm install
$ npm run fetch-plugins

$ ionic build
```

3. Run `ionic serve` to open the app on the browser.

If you get the error: `node_modules/rxjs/internal/symbol/observable.d.ts(4,9): error TS2687: All declarations of 'observable' must have identical modifiers.
`, run the command:
```
npm install @types/node@10.1.4
```

****
Based on the project of okode (https://github.com/okode/movies-app.git)
