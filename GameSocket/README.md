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

npm install nodemon express dotenv socket.io morgan cors pg --save-dev

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
  

npm install @types/dotenv @types/morgan @types/express @types/cors @types/pg --save-dev

npm install ts-node typescript --save-dev