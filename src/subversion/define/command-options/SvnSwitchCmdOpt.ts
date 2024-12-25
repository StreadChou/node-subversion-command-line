import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnSwitchParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnSwitchCmdOpt
}

export interface SvnSwitchCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** obsolete; same as --depth=files */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 设置工作副本的新深度为 ARG('exclude', 'empty', 'files', 'immediates', 或 'infinity') */
    "set-depth"?: string;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** 使用 ARG 作为合并命令 */
    "diff3-cmd"?: string;

    /** 忽略外部项目 */
    "ignore-externals"?: boolean;

    /** allow switching to a node with no common ancestor */
    "ignore-ancestry"?: boolean;

    /** handle unversioned obstructions as changes */
    "force"?: boolean;

    /** specify automatic conflict resolution action ('postpone', 'working', 'base', 'mine-conflict', 'theirs-conflict', 'mine-full', 'theirs-full', 'edit', 'launch', 'recommended') (shorthand: 'p', 'mc', 'tc', 'mf', 'tf', 'e', 'l', 'r') */
    "accept"?: string;

    /** deprecated; use 'svn relocate' */
    "relocate"?: boolean;

}
