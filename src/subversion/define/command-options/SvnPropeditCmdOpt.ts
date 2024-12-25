import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnPropeditParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnPropeditCmdOpt
}

export interface SvnPropeditCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 在版本属性上操作(使用-r参数) */
    "revprop"?: boolean;

    /** 指定日志信息ARG */
    /** 简称: m */
    "message"?: string;

    /** 从文件ARG读取日志信息 */
    /** 简称: F */
    "file"?: string;

    /** 强制校验日志信息资源 */
    "force-log"?: boolean;

    /** 使用 ARG 作为外部编辑器 */
    "editor-cmd"?: string;

    /** 将ARG的值视为字符编码 */
    "encoding"?: string;

    /** 在新版本设置版本属性 ARG 使用格式 name[=value] */
    "with-revprop"?: string;

    /** 强制操作运行 */
    "force"?: boolean;

}
