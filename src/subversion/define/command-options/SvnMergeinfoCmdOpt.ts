import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnMergeinfoParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnMergeinfoCmdOpt
}

export interface SvnMergeinfoCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 向下递归，与 --depth=infinity 相同 */
    /** 简称: R */
    "recursive"?: boolean;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** 打印附加信息 */
    /** 简称: v */
    "verbose"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 指定显示哪个版本集合 ('merged', 'eligible') */
    "show-revs"?: string;

    /** show revision log message, author and date */
    "log"?: boolean;

    /** 给予适合串联的输出 */
    "incremental"?: boolean;

}
