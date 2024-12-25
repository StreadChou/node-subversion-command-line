import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnCatParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionCat extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnCatParams) {
        let cmd!: string;
        if (params.TARGET_REV.startsWith("http") || params.TARGET_REV.startsWith("svn") || params.TARGET_REV.startsWith("/")) {
            cmd = `${this.cml.CommandPath} cat ${params.TARGET_REV} `;
        } else {
            this.checkRepoAbsPathExist();
            const Target = `${this.cml.repo_abs_path}/${params.TARGET_REV}`;
            cmd = `${this.cml.CommandPath} cat ${Target} `;
        }

        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnCatParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

