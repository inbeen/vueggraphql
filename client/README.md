# Typue

> 在 Vue-cli 的基础上，搭建一个 Typescript + Vue 的环境

### 初始化项目

Vue-cli 3.0 初始化配置如下：

![](https://i.loli.net/2018/08/26/5b82514ccd33d.jpg)

### 改造后的目录结构

```
├── public                          // 静态页面
├── src                             // 主目录
    ├── assets                      // 静态资源
    ├── lib                         // 全局插件
    ├── router                      // 路由配置
    ├── store                       // vuex 配置
    ├── types                       // 全局注入
    ├── utils                       // 工具方法(axios封装，全局方法等)
    ├── views                       // 页面
    ├── App.vue                     // 页面主入口
    ├── main.ts                     // 脚本主入口
    ├── registerServiceWorker.ts    // PWA 配置
├── .browserslistrc                 // 浏览器 配置
├── .editorconfig                   // 编辑器 配置
├── .postcssrc.js                   // postcss 配置
├── babel.config.js                 // preset 配置
├── package.json                    // 依赖
├── README.md                       // MarkDown file
├── tsconfig.json                   // ts 配置
├── tslint.json                     // tslint 配置
```

### 具体改造如下

* 封装 axios

  见 src/utils/config.ts 和 src/utils/api.ts

* vuex

  store 的目录结构

  ```
  ├── home                            // 模块
      ├── index.ts                    // 封装 state getters mutations actions
      ├── interface.ts                // 接口 管理
  ├── constants.ts                    // 常量 管理
  ├── index.ts                        // vuex 主入口
  ```

* Typescript 修改

  ```json
  // tslint.json
  "no-consecutive-blank-lines": false    // 禁止连续空白行
  "no-shadowed-variable": false          // 可在不同作用域声明相同变量名
  "member-access": false                 // 不必设置成员属性 public private
  "arrow-parens": false                  // 允许 res => res + 1
  "no-namespace": false                  // 允许 namespace
  
  // tsconfig.json
  "strictPropertyInitialization": false, // 声明变量可不初始化
  ```

### 屁话

没啥东西，看看就好

