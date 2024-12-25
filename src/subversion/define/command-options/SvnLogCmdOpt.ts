import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnLogParams extends SvnCommandParams {
    /** 需要看log的文件/文件夹: [PATH][@REV] URL[@REV] */
    PATH_REV?: string,
    /** 命令行参数 */
    cmdOpt?: SvnLogCmdOpt
}

export interface SvnLogCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 版本 ARG 引起的改变 */
    /** 简称: c */
    "change"?: string;

    /** do not print the log message */
    /** 简称: q */
    "quiet"?: boolean;

    /** also print all affected paths */
    /** 简称: v */
    "verbose"?: boolean;

    /** 从合并历史使用/显示额外信息 */
    /** 简称: g */
    "use-merge-history"?: boolean;

    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** 查看历史不要跨越不同的副本 */
    "stop-on-copy"?: boolean;

    /** 给予适合串联的输出 */
    "incremental"?: boolean;

    /** 输出为 XML */
    "xml"?: boolean;

    /** 日值项最大值 */
    /** 简称: l */
    "limit"?: string;

    /** 获取所有版本属性 */
    "with-all-revprops"?: boolean;

    /** 没有找回版本属性 */
    "with-no-revprops"?: boolean;

    /** 获取版本属性 ARG */
    "with-revprop"?: string;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 产生差异输出 */
    "diff"?: boolean;

    /** 使用 ARG 作为比较命令 */
    "diff-cmd"?: string;

    /** 覆盖配置文件中指定的 diff-cmd */
    "internal-diff"?: boolean;

    /** Specify differencing options for external diff or internal diff or blame. Default: '-u'. Options are separated by spaces. Internal diff and blame take: -u, --unified: Show 3 lines of unified context -b, --ignore-space-change: Ignore changes in amount of white space -w, --ignore-all-space: Ignore all white space --ignore-eol-style: Ignore changes in EOL style -U ARG, --context ARG: Show ARG lines of context -p, --show-c-function: Show C function name */
    /** 简称: x */
    "extensions"?: string;

    /** use ARG as search pattern (glob syntax, case- and accent-insensitive, may require quotation marks to prevent shell expansion) */
    "search"?: string;

    /** combine ARG with the previous search pattern */
    "search-and"?: string;

}
