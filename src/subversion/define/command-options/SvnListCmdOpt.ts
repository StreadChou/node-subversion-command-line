import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnListParams extends SvnCommandParams {
    /** 目标已经版本  [TARGET[@REV]...] */
    TARGET_REV: string;
    /** 命令行参数 */
    cmdOpt?: SvnListCmdOpt
}

export interface SvnListCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 打印附加信息 */
    /** 简称: v */
    "verbose"?: boolean;

    /** 向下递归，与 --depth=infinity 相同 */
    /** 简称: R */
    "recursive"?: boolean;

    /** with --verbose, show file sizes with base-2 unit suffixes (Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte), limiting the number of digits to three or less */
    /** 简称: H */
    "human-readable"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 给予适合串联的输出 */
    "incremental"?: boolean;

    /** 输出为 XML */
    "xml"?: boolean;

    /** also operate on externals defined by svn:externals properties */
    "include-externals"?: boolean;

    /** use ARG as search pattern (glob syntax, case- and accent-insensitive, may require quotation marks to prevent shell expansion) */
    "search"?: string;

}
