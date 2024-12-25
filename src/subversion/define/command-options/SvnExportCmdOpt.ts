import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnExportParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnExportCmdOpt
}

export interface SvnExportCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** obsolete; same as --depth=files */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 强制操作运行 */
    "force"?: boolean;

    /** 使用非标准的 EOL 标记 系统中立的文件标记 svn:eol-style 属性取值为 “native”。 ARG 可以是以下之一“LF”，“CR”，“CRLF” */
    "native-eol"?: string;

    /** 忽略外部项目 */
    "ignore-externals"?: boolean;

    /** 不要展开关键字 */
    "ignore-keywords"?: boolean;

}
