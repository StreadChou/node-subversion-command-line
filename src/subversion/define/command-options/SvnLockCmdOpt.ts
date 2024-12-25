import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnLockParams extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnLockCmdOpt
}

export interface SvnLockCmdOpt extends SvnShellOption {
    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** 指定加锁注释ARG */
    /** 简称: m */
    "message"?: string;

    /** 从文件 ARG 读取加锁注释 */
    /** 简称: F */
    "file"?: string;

    /** 强制校验锁定注释源 */
    "force-log"?: boolean;

    /** 将ARG的值视为字符编码 */
    "encoding"?: string;

    /** steal locks */
    "force"?: boolean;

    /** 不打印信息，或只打印概要信息 */
    /** 简称: q */
    "quiet"?: boolean;

}
