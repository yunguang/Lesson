
###  使用babel编译ES6

  1. 首先安装Node.js
  
  2. 在项目根目录下生成package.json的文件
  
  ```
  npm init 
  ```
  
  3. 安装babel
  ```
  npm install babel-cli --save-dev
  npm install babel-preset-es2015 --save-dev
  ```
  4. 配置package.json文件
  
  ```
  {
    "name": "es6demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "build": "babel src -d lib"  //这里配置编译路径： -src 原es6目录  -lib 编译后的es5目录
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "babel-cli": "^6.7.5",
      "babel-preset-es2015": "^6.6.0"
    }
  }
  ```
  5. 项目根目录创建.babelrc文件，输入以下配置
  
  ```
  // babel es2015
  {
     "presets": ["es2015"] 
  }
  ``` 
  
  6. src目录下写es6代码，最后运行编译
  
  ```
  npm run build
  ```

