import {EAppType} from "./enums/appType";

export interface ICreateOptions {
    /** app类型 */
    appType: EAppType;
    /** 是否跳过安装依赖 */
    skipInstall?: boolean;
}

/**
 * 创建项目
 * @param name 项目名称
 * @param options 参数
 */
const create = (name: string, options: ICreateOptions) => {
    const { appType, skipInstall } = options;
}

module.exports = create;