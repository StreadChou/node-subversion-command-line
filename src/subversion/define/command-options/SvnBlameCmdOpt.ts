import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnBlameParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnBlameCmdOpt
}

export interface SvnBlameCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 打印附加信息 */
    /** 简称: v */
    "verbose"?: boolean;

    /** 从合并历史使用/显示额外信息 */
    /** 简称: g */
    "use-merge-history"?: boolean;

    /** 给予适合串联的输出 */
    "incremental"?: boolean;

    /** 输出为 XML */
    "xml"?: boolean;

    /** Specify differencing options for external diff or internal diff or blame. Default: '-u'. Options are separated by spaces. Internal diff and blame take: -u, --unified: Show 3 lines of unified context -b, --ignore-space-change: Ignore changes in amount of white space -w, --ignore-all-space: Ignore all white space --ignore-eol-style: Ignore changes in EOL style -U ARG, --context ARG: Show ARG lines of context -p, --show-c-function: Show C function name */
    /** 简称: x */
    "extensions"?: string;

    /** 强制操作运行 */
    "force"?: boolean;

}
