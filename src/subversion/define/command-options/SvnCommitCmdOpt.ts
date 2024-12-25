import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnCommitParams extends SvnCommandParams {
    /** 需要提交的目录 */
    PATH?: string[]
    /** 命令行参数 */
    cmdOpt?: SvnCommitCmdOpt
}

export interface SvnCommitCmdOpt extends SvnShellOption {
    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

    /** obsolete; same as --depth=empty */
    /** 简称: N */
    "non-recursive"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** 不要解锁目标 */
    "no-unlock"?: boolean;

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

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

    /** 不要在提交后删除修改列表 */
    "keep-changelists"?: boolean;

    /** also operate on externals defined by svn:externals properties */
    "include-externals"?: boolean;

}
