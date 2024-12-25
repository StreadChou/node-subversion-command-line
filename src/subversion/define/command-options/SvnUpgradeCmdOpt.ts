import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnUpgradeParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnUpgradeCmdOpt
}

export interface SvnUpgradeCmdOpt extends SvnShellOption {
    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

}
