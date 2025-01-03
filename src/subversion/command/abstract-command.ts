import {SubversionCommandLine} from "../subversion-command-line";
import {SvnShellOption} from "../../define";
import {OptionToShellLine} from "../../helper";
import * as convert from "xml-js";
import {PathException} from "../../exception/PathException";
import * as fs from "node:fs";

export abstract class AbstractCommand {
    protected readonly cml: SubversionCommandLine

    protected constructor(cml: SubversionCommandLine) {
        this.cml = cml;
    }

    /** 生成命令 */
    abstract getCmd(params?: SvnCommandParams): string;

    /** 执行 */
    abstract run(params?: SvnCommandParams): Promise<string>;

    /** 将XML格式转换成JSON格式 */
    protected xmlToJson(xml: string): any {
        return JSON.parse(convert.xml2json(xml, {compact: true}));
    }

    /** 将Options附加到cmd中 */
    protected cmdAppendOptions(cmd: string, params?: SvnCommandParams) {
        if (params && params.cmdOpt) cmd += OptionToShellLine(params.cmdOpt);
        if (this.cml.commonOption) cmd += OptionToShellLine(this.cml.commonOption);
        return cmd;
    }

    /** 检查远端路径是否存在 */
    protected checkRepoAbsPathExist() {
        if (!this.cml.repo_abs_path) throw new PathException(`SVN远端路径未定义 repo_abs_path: ${this.cml.repo_abs_path}`)
    }

    /** 保护提交message */
    protected protectMessage(message: string) {
        message = message.replace(/\"/g, `\\"`)
        return `"${message}"`
    }

    protected isAbsPath(p: string) {
        if (p.startsWith("http://") || p.startsWith("https://") || p.startsWith("svn://")) return true;
        return p.startsWith("/");
    }
}

export interface SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: SvnShellOption
}