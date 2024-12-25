import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnUnlockParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnUnlockCmdOpt
}

export interface SvnUnlockCmdOpt extends SvnShellOption {
    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** break locks */
    "force"?: boolean;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

}
