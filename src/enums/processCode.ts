/**
 * 返回码定义
 */
export enum EProcessCode {
    // 通用
    /** 正常，不传默认也为0 */
    success = 0,
    /** 通用错误，不需要错误信息 */
    fail = -1,
    dirNotExists = 1000,


    // 业务错误
    // 杀端口
    killPortUnoccupied = 10100,
    killPortException = 10101,
}

/**
 * 返回码映射
 */
export const processCodeMapping = {
    // 通用
    [EProcessCode.dirNotExists]: '目录不存在',

    // 业务错误
    [EProcessCode.killPortUnoccupied]: '端口未被占用',
    [EProcessCode.killPortException]: '端口终止异常'
}