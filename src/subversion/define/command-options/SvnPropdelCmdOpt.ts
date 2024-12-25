import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnPropdelParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnPropdelCmdOpt
}

export interface SvnPropdelCmdOpt extends SvnShellOption {
    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** 向下递归，与 --depth=infinity 相同 */
    /** 简称: R */
    "recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 在版本属性上操作(使用-r参数) */
    "revprop"?: boolean;

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

}
