import {SvnShellOption} from "./define";
import {ChildProcessWithoutNullStreams, spawn} from 'child_process';
import {ExecException, ExecOptions} from "child_process";
import {StdException} from "./exception/StdException";


/** 将Object转换为命令行参数 */
export function OptionToShellLine(option_list: SvnShellOption | Array<SvnShellOption>) {
    let cmd = ``;
    if (!Array.isArray(option_list)) option_list = [option_list];
    option_list.forEach((option: any) => {
        Object.keys(option).forEach(ele => {
            if (typeof option[ele] === "boolean") {
                if (option[ele]) cmd += ` --${ele} `;
            } else {
                cmd += ` --${ele} ${option[ele]} `;
            }
        })
    })
    return cmd;
}

export async function execute(
    command: string,
    options?: { encoding: "buffer" | null; } & ExecOptions,
    callback?: (error: Error | null, stdout: string, stderr: string) => void
): Promise<string> {
    return new Promise<string>((resolve, reject) => {

        const childProcess: ChildProcessWithoutNullStreams = spawn(command, {
            shell: "bash", // 使用 shell 执行命令
            ...options,
        });

        let stdout = '';
        let stderr = '';

        childProcess.stdout.on('data', (data: Buffer) => {
            stdout += data.toString();
        });

        childProcess.stderr.on('data', (data: Buffer) => {
            stderr += data.toString();
        });

        childProcess.on('error', (error: Error) => {
            reject(error);
        });

        childProcess.on('close', (code: number) => {
            if (code !== 0) {
                reject(new StdException(`Command failed with exit code ${code}: ${stderr}`));
            } else {
                if (stderr.trim()) {
                    reject(new StdException(stderr));
                } else {
                    resolve(stdout);
                }
            }

            if (callback) {
                callback(code !== 0 ? new StdException(`Command failed with exit code ${code}: ${stderr}`) : null, stdout, stderr);
            }
        });
    });
}