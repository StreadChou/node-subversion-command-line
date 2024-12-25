import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnCatParams extends SvnCommandParams {
    /** 需要 cat 的文件: TARGET[@REV] */
    TARGET_REV: string,
    /** 命令行参数 */
    cmdOpt?: SvnCatCmdOpt
}

export interface SvnCatCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 不要展开关键字 */
    "ignore-keywords"?: boolean;

}
