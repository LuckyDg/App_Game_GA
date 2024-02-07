## 📚 LIBRARIES

npm install typescript --save-dev

npx-ts --init



npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

npx eslint --init
seleccionar : 
    enforce code install
    javascript modules
    none of these
    yes
    node
    answer question
    json
    tabs
    single
    windows
    yes
    yes
    npm

npm install express nodemon dotenv jsonwebtoken morgan cors pg --save-dev

crear archivo nodemon.json
agregar :
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "ts-node ./src/app.ts"
}
y cambiar en el package.json a 

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "node dist/app.js",
    "dev": "nodemon"
  },
  

npm install @types/dotenv @types/morgan @types/express @types/cors @types/jsonwebtoken @types/pg --save-dev

npm install ts-node typescript --save-dev

instalar para testing:
npm install --save-dev jest supertest
agragar al package json :
"scripts": {
  "test": "jest"
}

npm install --save-dev jest ts-jest @types/jest @types/supertest
npx ts-jest config:init

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
