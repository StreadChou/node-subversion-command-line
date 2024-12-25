import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnRelocateParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnRelocateCmdOpt
}

export interface SvnRelocateCmdOpt extends SvnShellOption {
    /** 忽略外部项目 */
    "ignore-externals"?: boolean;

}
