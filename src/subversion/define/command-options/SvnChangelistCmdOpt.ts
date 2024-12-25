import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnChangelistParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnChangelistCmdOpt
}

export interface SvnChangelistCmdOpt extends SvnShellOption {
    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** 向下递归，与 --depth=infinity 相同 */
    /** 简称: R */
    "recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 删除修改列表耦合 */
    "remove"?: boolean;

    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

}
