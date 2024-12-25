import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface SvnInfoParams extends SvnCommandParams {
    /** 是对本地执行 info 还是对远程执行info, 默认: repo_abs_path */
    use?: "wc_abs_path" | "repo_abs_path",
    /** 命令行参数 */
    cmdOpt?: SvnInfoCmdOpt
}

export interface SvnInfoCmdOpt extends SvnShellOption {
    /** ARG (一些命令也接受ARG1 版本参数可以是如下之一: NUMBER       版本号 '{' DATE '}' 在指定时间以后的版本 'HEAD'       版本库中的最新版本 'BASE'       工作副本的基线版本 'COMMITTED'  最后提交或基线之前 'PREV'       COMMITTED的前一版本 */
    /** 简称: r */
    "revision"?: string;

    /** 向下递归，与 --depth=infinity 相同 */
    /** 简称: R */
    "recursive"?: boolean;

    /** show file sizes with base-2 unit suffixes (Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte), limiting the number of digits to three or less */
    /** 简称: H */
    "human-readable"?: boolean;

    /** 限制操作深度是 ARG ('empty', 'files', 'immediates', 或 'infinity') */
    "depth"?: string;

    /** 传递文件 ARG 内容为附件参数 */
    "targets"?: string;

    /** 给予适合串联的输出 */
    "incremental"?: boolean;

    /** 输出为 XML */
    "xml"?: boolean;

    /** 只能对修改列表 ARG 的成员操作 */
    /** 简称: changelist */
    "cl"?: string;

    /** also operate on externals defined by svn:externals properties */
    "include-externals"?: boolean;

    /** print only the item identified by ARG 'kind'       node kind of TARGET 'url'        URL of TARGET in the repository 'relative-url' repository-relative URL of TARGET 'repos-root-url' root URL of repository 'repos-uuid' UUID of repository 'repos-size' for files, the size of TARGET in the repository 'revision'   specified or implied revision 'last-changed-revision' last change of TARGET at or before 'revision' 'last-changed-date' date of 'last-changed-revision' 'last-changed-author' author of 'last-changed-revision' 'wc-root'    root of TARGET's working copy 'schedule'   'normal','add','delete','replace' 'depth'      checkout depth of TARGET in WC 'changelist' changelist of TARGET in WC */
    "show-item"?: string;

    /** 不输出其后的换行符 */
    "no-newline"?: boolean;

}
