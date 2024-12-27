import {SvnShellCommandOption} from "../define";
import {PathException} from "../exception/PathException";
import {HybridAddDelete} from "./hybrid/Hybrid.AddDelete";
import {HybridAddDeleteCommit} from "./hybrid/Hybrid.AddDeleteCommit";
import {HybridCheckoutUpdate} from "./hybrid/Hybrid.CheckoutUpdate";
import {SubversionAdd} from "./command/subversion.add";
import {SubversionCheckout} from "./command/subversion.checkout";
import {SubversionInfo} from "./command/subversion.info";
import {SubversionList} from "./command/subversion.list";
import {SubversionUpdate} from "./command/subversion.update";
import {SubversionStatus} from "./command/subversion.status";
import {SubversionDelete} from "./command/subversion.delete";
import {SubversionRevert} from "./command/subversion.revert";
import {SubversionCleanup} from "./command/subversion.cleanup";
import {SubversionLog} from "./command/subversion.log";
import {SubversionCat} from "./command/subversion.cat";
import {SubversionCommit} from "./command/subversion.commit";
import {SubversionCopy} from "./command/subversion.copy";

/** 一个SVN实例 */
export class SubversionCommandLine {
    /** svn 可执行文件所在的路径 | /usr/local/bin/svn  */
    readonly CommandPath: string
    /** svn 通用命令行参数 */
    readonly commonOption?: SvnShellCommandOption

    /** 工作副本的绝对路径 */
    wc_abs_path?: string;
    /** 远端服务器的绝对路径 */
    repo_abs_path?: string;

    add: SubversionAdd = new SubversionAdd(this);
    checkout: SubversionCheckout = new SubversionCheckout(this);
    info: SubversionInfo = new SubversionInfo(this);
    list: SubversionList = new SubversionList(this);
    update: SubversionUpdate = new SubversionUpdate(this);
    status: SubversionStatus = new SubversionStatus(this);
    remove: SubversionDelete = new SubversionDelete(this);
    revert: SubversionRevert = new SubversionRevert(this);
    cleanup: SubversionCleanup = new SubversionCleanup(this);
    log: SubversionLog = new SubversionLog(this);
    cat: SubversionCat = new SubversionCat(this);
    commit: SubversionCommit = new SubversionCommit(this);
    copy: SubversionCopy = new SubversionCopy(this);


    // 增加所有新增文件, 移除所有删除文件
    HybridAddDelete: HybridAddDelete = new HybridAddDelete(this);
    // 增加移除的基础上提交文件
    HybridAddDeleteCommit: HybridAddDeleteCommit = new HybridAddDeleteCommit(this);
    // 检出或者更新
    HybridCheckoutUpdate: HybridCheckoutUpdate = new HybridCheckoutUpdate(this);

    constructor(CommandPath: string, subversionPath: SubversionPath, commonOption?: SvnShellCommandOption) {
        this.CommandPath = CommandPath;
        this.commonOption = commonOption;
        this.initPath(subversionPath);
    }

    /** 初始化路径信息 */
    initPath(subversionPath: SubversionPath) {
        if (subversionPath.repo_abs_path) {
            const repo_abs_path = subversionPath.repo_abs_path;
            const repo_protocol = ["http", "https", "svn"];
            if (!repo_protocol.some(ele => repo_abs_path.startsWith(ele))) {
                throw new PathException(`SVN的远程路径定义错误 repo_abs_path: ${repo_abs_path}`)
            }
            this.repo_abs_path = repo_abs_path;
        }

        if (subversionPath.wc_abs_path) {
            this.wc_abs_path = subversionPath.wc_abs_path;
            // if (!fs.existsSync(this.wc_abs_path)) {
            //     throw new PathException(`SVN的本地路径定义错误 wc_abs_path: ${wc_abs_path}`)
            // }
        }

        if (!this.wc_abs_path && !this.repo_abs_path) {
            throw new PathException(`SVN没有一个合理的路径`)
        }
    }
}

export interface SubversionPath {
    /** 工作副本的绝对路径 */
    wc_abs_path?: string;
    /** 远端服务器的绝对路径 */
    repo_abs_path?: string;
}