import {SubversionCommandLine, SubversionPath} from "../src";
import * as path from "node:path";
import * as fs from "node:fs";

const subversionPath: SubversionPath = {
    wc_abs_path: path.join(__dirname, "../storage/LogAnalysis"),
    repo_abs_path: "svn://192.16.0.82/lrs_tool/LogAnalysis"
}
const svn = new SubversionCommandLine("/usr/local/bin/svn", subversionPath, {username: "stread", password: '123456'});
const main = async () => {

    // 测试co的正确性
    // const res = await svn.checkout.run({});

    // 测试info的xml格式
    // const res = await svn.info.run({use: "wc_abs_path", cmdOpt: {xml: true}});
    // const data = svn.info.xmlToJson(res);
    // console.log(JSON.stringify(data));


    // 测试list的xml格式
    // const res = await svn.list.run({TARGET_REV: `${<string>svn.repo_abs_path}`, cmdOpt: {xml: true}});
    // const data = svn.list.xmlToJson(res);
    // console.log(JSON.stringify(data));


    // 测试update的正确性
    // const res = await svn.update.run({});
    // console.log(res)


    // 测试status的正确性
    // const res = await svn.status.run({cmdOpt: {xml: true}});
    // const data = svn.status.xmlToJson(res);
    // console.log(JSON.stringify(data));


    // 测试 add 的正确性
    // const res = await svn.add.run({PATH: "test"});
    // console.log(res)


    // 测试 delete 的正确性
    // const res = await svn.remove.run({PATH: "src/app/reader.ts"});
    // console.log(res)


    // 测试 revert 的正确性
    // const res = await svn.revert.run({PATH: ".", cmdOpt: {recursive: true}});
    // console.log(res)


    // 测试 cleanup 的正确性
    // const res = await svn.cleanup.run({});
    // console.log(res)


    // 测试 log 的正确性
    // const res = await svn.log.run({cmdOpt: {xml: true}});
    // const data = svn.log.xmlToJson(res);
    // console.log(JSON.stringify(data));


    // 测试 cat 的正确性
    // const res = await svn.cat.run({TARGET_REV: "package.json@50"});
    // console.log(res);

    // 测试 commit 的正确性
    // const res = await svn.commit.run({cmdOpt: {message: `测试"更新`}});
    // console.log(res);


    // 测试 一键增加和删除 的正确性
    // const res = await svn.HybridAddDelete.run({})
    // console.log(res)


    // 测试 一键增加和删除并且提交 的正确性
    // const res = await svn.HybridAddDeleteCommit.run({commit: {message: "测试"}})
    // console.log(res)


    // 测试 一键拉取或者更新 的正确性
    const res = await svn.HybridCheckoutUpdate.run({isCleanup: true})
    console.log(res)


}

main();