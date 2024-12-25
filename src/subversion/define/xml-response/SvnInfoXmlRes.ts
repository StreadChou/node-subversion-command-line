import {
    SvnCommitFiled,
    SvnItemAttributesField,
    SvnRepositoryField, SvnWcInfoField,
    TextField,
    XmlDeclaration
} from "./index";

// 根接口，表示SVN info命令的XML输出结构
export interface SvnInfoXMLRes {
    _declaration: XmlDeclaration;  // 声明部分，包含版本和编码信息
    // 信息部分，包含SVN条目的详细信息
    info: {
        entry: SvnInfoEntry, // SVN条目，包含详细的条目信息
    };
}

// 代表单个SVN条目（可能是文件或目录）
export interface SvnInfoEntry {
    _attributes: SvnItemAttributesField;   // 条目的属性，如路径、版本和类型
    url: TextField;       // SVN条目的URL
    "relative-url": TextField;       // SVN条目的相对URL（相对于仓库）
    repository: SvnRepositoryField;        // 仓库的相关信息
    "wc-info": SvnWcInfoField;            // 工作副本信息
    commit: SvnCommitFiled;            // 与此条目相关的提交信息
}
