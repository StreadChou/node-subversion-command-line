import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnCheckoutParams} from "../define/command-options";
import {execute} from "../../helper";
import {PathException} from "../../exception/PathException";
import * as fs from "node:fs";
import * as path from "node:path";

export class SubversionCheckout extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnCheckoutParams) {
        if (!this.cml.repo_abs_path) throw new PathException(`SVN的远程路径定义错误 repo_abs_path: ${this.cml.repo_abs_path}`)
        if (!this.cml.wc_abs_path) throw new PathException(`SVN的本地路径定义错误 wc_abs_path: ${this.cml.wc_abs_path}`)

        if (fs.existsSync(this.cml.wc_abs_path)) throw new PathException(`目标已经存在 wc_abs_path: ${this.cml.wc_abs_path}`)
        const dirname = path.dirname(this.cml.wc_abs_path);
        if (!fs.existsSync(dirname)) {
            if (!params.mkdir) throw new PathException(`父级目标文件夹不存在 wc_abs_path: ${dirname}`)
            fs.mkdirSync(dirname, {recursive: true});
        }


        let cmd = `${this.cml.CommandPath} checkout ${this.cml.repo_abs_path} ${this.cml.wc_abs_path} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnCheckoutParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

