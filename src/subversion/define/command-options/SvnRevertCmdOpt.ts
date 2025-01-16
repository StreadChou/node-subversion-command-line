import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnRevertParams extends SvnCommandParams {
    /** 需要add的文件 */
    PATH: string,
    /** 是否使用相对路径 */
    relativePath?: boolean;
    /** 命令行参数 */
    cmdOpt?: SvnRevertCmdOpt
}

export interface SvnRevertCmdOpt extends SvnShellOption {
    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** 向下递归，与 --depth=infinity 相同 */
    /** 简称: R */
    "recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

    /** reverting an added item will remove it from disk */
    "remove-added"?: boolean;

}
