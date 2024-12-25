import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnDiffParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnDiffCmdOpt
}

export interface SvnDiffCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 版本 ARG (如同 -r ARG-1 如果 ARG 为负数则等价于 -r ARG:ARG-1                             如果 ARG 的格式是 ARG1-ARG2，那么它等价于 ARG1:ARG2，包含 ARG1 */
    /** 简称: c */
    "change"?: string;

    /** 使用 ARG 作为旧目标 */
    "old"?: string;

    /** 使用 ARG 作为新目标 */
    "new"?: string;

    /** obsolete; same as --depth=files */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 使用 ARG 作为比较命令 */
    "diff-cmd"?: string;

    /** 覆盖配置文件中指定的 diff-cmd */
    "internal-diff"?: boolean;

    /** Specify differencing options for external diff or internal diff or blame. Default: '-u'. Options are separated by spaces. Internal diff and blame take: -u, --unified: Show 3 lines of unified context -b, --ignore-space-change: Ignore changes in amount of white space -w, --ignore-all-space: Ignore all white space --ignore-eol-style: Ignore changes in EOL style -U ARG, --context ARG: Show ARG lines of context -p, --show-c-function: Show C function name */
    /** 简称: x */
    "extensions"?: string;

    /** 不要输出增加文件造成的差异 */
    "no-diff-added"?: boolean;

    /** 不要输出删除文件造成的差异 */
    "no-diff-deleted"?: boolean;

    /** 操作时忽略属性 */
    "ignore-properties"?: boolean;

    /** show only properties during the operation */
    "properties-only"?: boolean;

    /** 请不要将复制或移动的文件与其源文件比较 */
    "show-copies-as-adds"?: boolean;

    /** diff unrelated nodes as delete and add */
    "notice-ancestry"?: boolean;

    /** 显示结果的概要 */
    "summarize"?: boolean;

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

    /** 强制操作运行 */
    "force"?: boolean;

    /** 输出为 XML */
    "xml"?: boolean;

    /** 使用 git 的扩展差异格式 */
    "git"?: boolean;

    /** generate diff suitable for generic third-party patch tools; currently the same as --show-copies-as-adds --ignore-properties */
    "patch-compatible"?: boolean;

}
