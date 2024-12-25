import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnStatusParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnStatusCmdOpt
}

export interface SvnStatusCmdOpt extends SvnShellOption {
    /** 显示更新信息 */
    /** 简称: u */
    "show-updates"?: boolean;

    /** 打印附加信息 */
    /** 简称: v */
    "verbose"?: boolean;

    /** obsolete; same as --depth=immediates */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 不打印未版本控制的条目 */
    /** 简称: q */
    "quiet"?: boolean;

    /** disregard default and svn svn:global-ignores property ignores */
    "no-ignore"?: boolean;

    /** 给予适合串联的输出 */
    "incremental"?: boolean;

    /** 输出为 XML */
    "xml"?: boolean;

    /** 忽略外部项目 */
    "ignore-externals"?: boolean;

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

}
