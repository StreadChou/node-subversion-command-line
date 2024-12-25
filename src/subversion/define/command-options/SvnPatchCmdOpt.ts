import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnPatchParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnPatchCmdOpt
}

export interface SvnPatchCmdOpt extends SvnShellOption {
    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** 尝试操作但没有修改 */
    "dry-run"?: boolean;

    /** 需要从补丁文件中的路径中裁剪的前导路径组件数量。 默认 --strip 0 不修改路径。指定 --strip 1 会将 路径 'doc/fudge/crunchy.html' 转换为 'fudge/crunchy.html'。指定 --strip 2 会得到 'crunchy.html' 。在所有平台中期望的组件分隔符 都是 '/'。前导 '/' 被计算为一个组件。 */
    "strip"?: string;

    /** 反向应用补丁 */
    "reverse-diff"?: boolean;

    /** 在模式匹配时，忽略空白 */
    "ignore-whitespace"?: boolean;

}
