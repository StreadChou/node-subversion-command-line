import {PathField, SvnCommitFiled, TextField, XmlDeclaration} from "./constant";

// 根接口，表示 svn status 命令的 XML 输出结构
export interface SvnStatusXmRes {
    _declaration: XmlDeclaration; // XML 声明部分，包含版本和编码信息
    // 状态信息的根部分
    status: {
        target: SvnStatusTarget; // 包含目标目录或文件的状态信息
    };
}

// 表示目标信息的接口，包含路径及其条目列表
export interface SvnStatusTarget {
    _attributes: PathField; // 目标的属性，如路径
    entry: SvnStatusEntry | SvnStatusEntry[];          // 目标中的文件或目录条目
}


// 单个条目，表示目标中的文件或目录
export interface SvnStatusEntry {
    _attributes: PathField; // 条目的属性，与目标类似（路径）
    "wc-status": SvnStatusWcStatus;         // 工作副本状态信息
}

// 工作副本的状态信息
export interface SvnStatusWcStatus {
    _attributes: SvnStatusWcStatusAttributes; // 状态属性，如状态类型、版本等
    commit?: SvnCommitFiled;   // 如果适用，与此状态相关的提交信息
}

// 工作副本状态的属性
export interface SvnStatusWcStatusAttributes {
    item: SvnItemStatus;  // 状态类型（例如：added、modified、deleted 等）
    revision?: string;  // 工作副本的修订版本号（如果适用）
    props: string;  // 属性状态（例如：none、modified 等）
}



/**
 * 表示文件或目录的状态类型 (item) 的完整枚举。
 * 这些状态根据 SVN 官方文档定义，涵盖了所有可能的值。
 */
export enum SvnItemStatus {
    /** 文件或目录未发生变化 */
    Normal = "normal",
    /** 文件或目录已被修改 */
    Modified = "modified",
    /** 文件或目录已被添加到版本控制 */
    Added = "added",
    /** 文件或目录已被删除 */
    Deleted = "deleted",
    /** 文件或目录的属性已修改 */
    PropsModified = "props-modified",
    /** 文件或目录已被重命名或移动 */
    Moved = "moved",
    /** 文件已经从本地被移除 */
    Missing = "missing",
    /** 文件或目录的内容冲突 */
    Conflicted = "conflicted",
    /** 文件或目录已被忽略 */
    Ignored = "ignored",
    /** 文件或目录未受版本控制 */
    Unversioned = "unversioned",
    /** 文件或目录的版本已被替换 */
    Replaced = "replaced",
    /** 文件或目录已被外部定义（例如外部引用） */
    External = "external",
    /** 文件或目录被部分锁定 */
    Obstructed = "obstructed",
    /** 文件或目录的锁信息丢失 */
    Incomplete = "incomplete",
}

