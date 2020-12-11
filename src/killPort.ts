import pidFromPort from 'pid-from-port';
import os from "os";
import child_process from "child_process";
import {EProcessCode, processCodeMapping} from "./enums/processCode";

/**
 * 杀端口
 * @param port 端口号
 */
const killPort = (port: number) => {
    pidFromPort(Number(port)).then((pid: number) => {
        let cmd = 'kill -9 ' + pid;
        if (os.platform() === 'win32') {
            cmd = 'taskkill /pid ' + pid +' -t -f'
        }

        child_process.exec(cmd, {}, function(error, stdout, stderr) {
            if (error) {
                console.log(processCodeMapping[EProcessCode.killPortException]);
                process.exit(EProcessCode.killPortException);
                return;
            }

            console.log('终止成功');
            process.exit();
        });
    }).catch(() => {
        console.log(processCodeMapping[EProcessCode.killPortUnoccupied]);
        process.exit(EProcessCode.killPortUnoccupied);
    });
}

module.exports = killPort;