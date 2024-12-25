import {PathField, SvnCommitFiled, TextField, XmlDeclaration} from "./constant";

// 根接口，表示svn list命令的XML输出结构
export interface SvnListXmRes {
    _declaration: XmlDeclaration; // 声明部分，包含版本和编码信息
    // lists部分，包含文件和目录的详细信息
    lists: {
        list: SvnListList; // 包含一个list对象
    };
}

// list部分，表示一个文件或目录的列表
export interface SvnListList {
    _attributes: PathField; // list的属性，比如路径
    entry: SvnListEntry | SvnListEntry[]; // 文件或目录的条目列表
}

// 单个条目，代表一个文件或目录
export interface SvnListEntry {
    _attributes: {
        kind: string; // 类型（文件：file，目录：dir）
    };
    name: TextField;            // 文件或目录的名称
    size?: TextField;            // 文件的大小（如果是目录则可能不存在）
    commit: SvnCommitFiled;          // 与此条目相关的提交信息
}

