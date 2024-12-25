import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnCleanupParams extends SvnCommandParams {
    /** 需要cleanup的路径 */
    PATH?: string;
    /** 命令行参数 */
    cmdOpt?: SvnCleanupCmdOpt
}

export interface SvnCleanupCmdOpt extends SvnShellOption {
    /** remove unversioned items */
    "remove-unversioned"?: boolean;

    /** remove ignored items */
    "remove-ignored"?: boolean;

    /** remove unreferenced pristines from .svn directory */
    "vacuum-pristines"?: boolean;

    /** also operate on externals defined by svn:externals properties */
    "include-externals"?: boolean;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** deprecated and ignored */
    "diff3-cmd"?: string;

}
