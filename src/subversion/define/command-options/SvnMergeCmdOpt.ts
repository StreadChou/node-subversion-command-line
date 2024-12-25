import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnMergeParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnMergeCmdOpt
}

export interface SvnMergeCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 版本 ARG (如同 -r ARG-1 如果 ARG 为负数则等价于 -r ARG:ARG-1                             如果 ARG 的格式是 ARG1-ARG2，那么它等价于 ARG1:ARG2，包含 ARG1 */
    /** 简称: c */
    "change"?: string;

    /** obsolete; same as --depth=files */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** force deletions even if deleted contents don't match */
    "force"?: boolean;

    /** 尝试操作但没有修改 */
    "dry-run"?: boolean;

    /** 使用 ARG 作为合并命令 */
    "diff3-cmd"?: string;

    /** 只合并合并信息的差异 */
    "record-only"?: boolean;

    /** Specify differencing options for external diff or internal diff or blame. Default: '-u'. Options are separated by spaces. Internal diff and blame take: -u, --unified: Show 3 lines of unified context -b, --ignore-space-change: Ignore changes in amount of white space -w, --ignore-all-space: Ignore all white space --ignore-eol-style: Ignore changes in EOL style -U ARG, --context ARG: Show ARG lines of context -p, --show-c-function: Show C function name */
    /** 简称: x */
    "extensions"?: string;

    /** disable merge tracking; diff nodes as if related */
    "ignore-ancestry"?: boolean;

    /** specify automatic conflict resolution action ('postpone', 'working', 'base', 'mine-conflict', 'theirs-conflict', 'mine-full', 'theirs-full', 'edit', 'launch', 'recommended') (shorthand: 'p', 'mc', 'tc', 'mf', 'tf', 'e', 'l', 'r') */
    "accept"?: string;

    /** deprecated */
    "reintegrate"?: boolean;

    /** Allow operation on mixed-revision working copy. Use of this option is not recommended! Please run 'svn update' instead. */
    "allow-mixed-revisions"?: boolean;

    /** 打印附加信息 */
    /** 简称: v */
    "verbose"?: boolean;

}
