/** SVN命令枚举 */
export enum SVNCommand {
    /** 添加文件或目录到版本控制 */
    Add = "add",
    /** 管理认证信息 */
    Auth = "auth",
    /** 显示文件或目录的最后修改信息 */
    Blame = "blame",
    /** 显示文件或目录的内容 */
    Cat = "cat",
    /** 将文件或目录添加到更改列表 */
    Changelist = "changelist",
    /** 检出一个工作副本 */
    Checkout = "checkout",
    /** 清理工作副本 */
    Cleanup = "cleanup",
    /** 提交更改 */
    Commit = "commit",
    /** 复制文件或目录 */
    Copy = "copy",
    /** 删除文件或目录 */
    Delete = "delete",
    /** 显示文件或目录之间的差异 */
    Diff = "diff",
    /** 导出文件或目录 */
    Export = "export",
    /** 显示帮助信息 */
    Help = "help",
    /** 导入文件或目录到版本库 */
    Import = "import",
    /** 显示文件或目录的信息 */
    Info = "info",
    /** 列出目录内容 */
    List = "list",
    /** 锁定文件 */
    Lock = "lock",
    /** 显示提交日志 */
    Log = "log",
    /** 合并两个不同分支的更改 */
    Merge = "merge",
    /** 显示合并信息 */
    Mergeinfo = "mergeinfo",
    /** 创建一个新目录 */
    Mkdir = "mkdir",
    /** 移动或重命名文件或目录 */
    Move = "move",
    /** 应用补丁文件 */
    Patch = "patch",
    /** 删除属性 */
    Propdel = "propdel",
    /** 编辑属性 */
    Propedit = "propedit",
    /** 获取属性值 */
    Propget = "propget",
    /** 列出属性 */
    Proplist = "proplist",
    /** 设置属性 */
    Propset = "propset",
    /** 改变工作副本的URL */
    Relocate = "relocate",
    /** 解决冲突 */
    Resolve = "resolve",
    /** 标记冲突已解决 */
    Resolved = "resolved",
    /** 恢复工作副本的本地更改 */
    Revert = "revert",
    /** 显示工作副本的状态 */
    Status = "status",
    /** 切换工作副本到另一分支 */
    Switch = "switch",
    /** 解锁文件 */
    Unlock = "unlock",
    /** 更新工作副本 */
    Update = "update",
    /** 升级工作副本到较新版本 */
    Upgrade = "upgrade",
}

/** SVN命令配置 */
export const SVNCommandConfig: Record<SVNCommand, { cmd: SVNCommand; alias: string[] }> = {
    add: {cmd: SVNCommand.Add, alias: []},
    auth: {cmd: SVNCommand.Auth, alias: []},
    blame: {cmd: SVNCommand.Blame, alias: ["praise", "annotate", "ann"]},
    cat: {cmd: SVNCommand.Cat, alias: []},
    changelist: {cmd: SVNCommand.Changelist, alias: ["cl"]},
    checkout: {cmd: SVNCommand.Checkout, alias: ["co"]},
    cleanup: {cmd: SVNCommand.Cleanup, alias: []},
    commit: {cmd: SVNCommand.Commit, alias: ["ci"]},
    copy: {cmd: SVNCommand.Copy, alias: ["cp"]},
    delete: {cmd: SVNCommand.Delete, alias: ["del", "remove", "rm"]},
    diff: {cmd: SVNCommand.Diff, alias: ["di"]},
    export: {cmd: SVNCommand.Export, alias: []},
    help: {cmd: SVNCommand.Help, alias: ["?", "h"]},
    import: {cmd: SVNCommand.Import, alias: []},
    info: {cmd: SVNCommand.Info, alias: []},
    list: {cmd: SVNCommand.List, alias: ["ls"]},
    lock: {cmd: SVNCommand.Lock, alias: []},
    log: {cmd: SVNCommand.Log, alias: []},
    merge: {cmd: SVNCommand.Merge, alias: []},
    mergeinfo: {cmd: SVNCommand.Mergeinfo, alias: []},
    mkdir: {cmd: SVNCommand.Mkdir, alias: []},
    move: {cmd: SVNCommand.Move, alias: ["mv", "rename", "ren"]},
    patch: {cmd: SVNCommand.Patch, alias: []},
    propdel: {cmd: SVNCommand.Propdel, alias: ["pdel", "pd"]},
    propedit: {cmd: SVNCommand.Propedit, alias: ["pedit", "pe"]},
    propget: {cmd: SVNCommand.Propget, alias: ["pget", "pg"]},
    proplist: {cmd: SVNCommand.Proplist, alias: ["plist", "pl"]},
    propset: {cmd: SVNCommand.Propset, alias: ["pset", "ps"]},
    relocate: {cmd: SVNCommand.Relocate, alias: []},
    resolve: {cmd: SVNCommand.Resolve, alias: []},
    resolved: {cmd: SVNCommand.Resolved, alias: []},
    revert: {cmd: SVNCommand.Revert, alias: []},
    status: {cmd: SVNCommand.Status, alias: ["stat", "st"]},
    switch: {cmd: SVNCommand.Switch, alias: ["sw"]},
    unlock: {cmd: SVNCommand.Unlock, alias: []},
    update: {cmd: SVNCommand.Update, alias: ["up"]},
    upgrade: {cmd: SVNCommand.Upgrade, alias: []},
};
