/** Svn 命令行的属性 */
export interface SvnShellOption {
    [key: string]: any;
}

/** Svn 命令行的通用参数 */
export interface SvnShellCommandOption extends SvnShellOption {
    /** 账户 */
    username?: string;
    /** 密码 */
    password?: string;
    ["no-auth-cache"]?: boolean;
    ["non-interactive"]?: boolean;
    ["force-interactive"]?: boolean;
    ["trust-server-cert"]?: boolean;
    ["trust-server-cert-failures"]?: string;
    ["config-dir"]?: string;
    ["config-option"]?: string
}