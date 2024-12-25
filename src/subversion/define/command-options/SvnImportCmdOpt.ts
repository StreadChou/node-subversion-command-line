import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnImportParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnImportCmdOpt
}

export interface SvnImportCmdOpt extends SvnShellOption {
    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** obsolete; same as --depth=files */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 启用自动属性 */
    "auto-props"?: boolean;

    /** 强制操作运行 */
    "force"?: boolean;

    /** 关闭自动属性 */
    "no-auto-props"?: boolean;

    /** 指定日志信息ARG */
    /** 简称: m */
    "message"?: string;

    /** 从文件ARG读取日志信息 */
    /** 简称: F */
    "file"?: string;

    /** 强制校验日志信息资源 */
    "force-log"?: boolean;

    /** 使用 ARG 作为外部编辑器 */
    "editor-cmd"?: string;

    /** 将ARG的值视为字符编码 */
    "encoding"?: string;

    /** 在新版本设置版本属性 ARG 使用格式 name[=value] */
    "with-revprop"?: string;

    /** disregard default and svn svn:global-ignores property ignores */
    "no-ignore"?: boolean;

}
