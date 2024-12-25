import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnAddParams extends SvnCommandParams {
    /** 需要add的文件 */
    PATH: string,
    /** 命令行参数 */
    cmdOpt?: SvnAddCmdOpt
}

export interface SvnAddCmdOpt extends SvnShellOption {
    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** obsolete; same as --depth=empty */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** ignore already versioned paths */
    "force"?: boolean;

    /** disregard default and svn svn:global-ignores property ignores */
    "no-ignore"?: boolean;

    /** 启用自动属性 */
    "auto-props"?: boolean;

    /** 关闭自动属性 */
    "no-auto-props"?: boolean;

    /** 增加中间父目录 */
    "parents"?: boolean;

}
