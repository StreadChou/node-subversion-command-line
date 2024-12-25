import {PathField, RevisionField, SvnCommitFiled, TextField, XmlDeclaration} from "./constant";

/**
 * 表示 SVN log 命令的 XML 输出结构
 */
export interface SvnLogXmRes {
    _declaration: XmlDeclaration;  // XML 声明部分，包含版本和编码信息
    // 包含所有日志条目的根部分
    log: {
        logentry: SvnLogLogentry | SvnLogLogentry[]
    };
}


/**
 * 日志条目的结构，表示每个提交的详细信息
 */
export interface SvnLogLogentry {
    _attributes: RevisionField;  // 日志条目的属性，包含修订版本号
    author: TextField;              // 提交的作者
    date: TextField;              // 提交的日期
    msg: TextField;              // 提交的消息
}