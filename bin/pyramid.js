#!/usr/bin/env node

// 使用严格模式
'use strict';

// 第三方包
const program = require('commander');
const chalk = require('chalk');
// const child_process = require ("child_process");


// 版本号
program
    .version(require('../package').version, '-v, --version')
    .usage('<command> [options]');

/************** 功能开发，一个功能对应一个program，不要混写，工具方法单独提出来 **************/

// 创建项目
program
    .command('create <app-name>')
    // 带参数类型
    .requiredOption('--app-type <appType>', 'create app with type')
    // boolean类型
    .option('--skip-install', 'is skip install node_modules')
    .action((name, options) => {
        require('../lib/create.js')(name, options.opts())
    });

// // 测试
// program
//     .command('test')
//     .action(() => {
//         process.exit();
//     });
//
// // 测试
// program
//     .command('test1')
//     .action(() => {
//         const ls = child_process.spawnSync('pyramid test', {
//             shell: true,
//             stdio: 'inherit',
//         });
//         console.log(ls);
//     });

// 杀端口
program
    .command('killPort <port>')
    .action((port) => {
        require('../lib/killPort.js')(port)
    });

/************** 功能开发 **************/















// 解析
program.parse(process.argv);

// 自定义显示帮助命令
if (!program.args.length) {
    const detail = `
  Usage: pyramid <command> [options]

  Commands:
    ${chalk['green'](`-v | --version `)}    view pyramid-cli version

  run ${chalk['blue'](`pyramid help [command]`)} for usage of a specific command.
    `;

    console.log(detail);
}