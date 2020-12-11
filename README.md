## pyramid-cli
### 说明
pyramid-cli 脚手架工具

### 使用
```
1.安装依赖
yarn

2.本地链接
npm link

3.启动
yarn start

4.命令行输入调试（示例）
pyramid create
```

### 发布
```
1.发布
npm publish -access public

2.取消发布
npm unpublish pyramid@版本号
```

### 命令返回
```
1.在子命令中返回对应编码
process.exit(1000);

2.运行自命令来接收
const ls = child_process.spawnSync('pyramid test', {
            shell: true,
            stdio: 'inherit',
        });
console.log(ls.status);
```

### 重要功能
#### 以前开发完成的功能（可能部分需要重写）
1.初始化项目（PC、移动）
2.区块包项目相关功能（创建、更新、删除、读取信息）
3.区块包下区块分类相关功能（创建分类、读取分类下区块、模板列表）
4.模板、区块相关功能（区块增删改差）
5.模板、区块插入项目
6.项目config配置动态修改
7.UMI配置动态修改
8.常用命令行工具、比如杀端口等

#### 可以考虑新增加的功能
1.自动生成模板文件，比如request、dict、interface、model等
2.可以提供出去一些工具类方法，比如写入路由配置，方便以后插件使用

