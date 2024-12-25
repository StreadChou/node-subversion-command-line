import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnAuthParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnAuthCmdOpt
}

export interface SvnAuthCmdOpt extends SvnShellOption {
    /** remove matching authentication credentials */
    "remove"?: boolean;

    /** show cached passwords */
    "show-passwords"?: boolean;

}
