// Xml信息声明部分的元数据，通常包括版本和编码信息
export interface XmlDeclaration {
    _attributes: {
        version: string;  // XML的版本
        encoding: string;  // XML的编码
    }
}

/** 文件类型 */
export type FileKind = "dir" | "file";

// 文本类型: 表示一个字符串的简单对象（用于仓库、作者等字段）
export interface TextField {
    _text: string;
}

// 提交的属性，通常包含版本号
export interface RevisionField {
    revision: string;  // 提交的版本号
}

// 路径属性
export interface PathField {
    path: string;
}

// SVN条目的属性，包括路径、版本和类型（文件或目录）
export interface SvnItemAttributesField {
    path: string;  // 工作副本中的文件或目录路径
    revision: string;  // 此条目的版本号
    kind: string;  // 条目的类型（文件或目录）
}

// 提交信息，包含提交的版本号、作者和日期
export interface SvnCommitFiled {
    _attributes: RevisionField;  // 提交的属性，通常是版本号
    author: TextField;       // 提交作者
    date: TextField;       // 提交日期
}

// 仓库信息，包含仓库根URL和UUID（全局唯一标识符）
export interface SvnRepositoryField {
    root: TextField;  // SVN仓库的根URL
    uuid: TextField;  // SVN仓库的UUID
}

// 工作副本信息，包括工作副本根的绝对路径、计划操作和深度
export interface SvnWcInfoField {
    "wcroot-abspath": TextField;  // 工作副本根的绝对路径
    schedule: TextField;  // 工作副本的操作计划（如添加、删除等）
    depth: TextField;  // 工作副本的深度（如：empty, files, infinity等）
}