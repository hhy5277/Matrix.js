/**
 * @author youngtian13
 * @date 2016-06-15
 */

'use strict';

const assert = require('chai').assert;
const fs = require('fs');

const DATASOURCE_PATH = __dirname + '/model/datasource';
const MOCK_PATH = __dirname + '/model/mock';

describe('Model', function() {
    // describe('#datesource', function() {
    //     it('should return json', function() {
    //         // 遍历文件，得到所有datasource 文件
    //         util.wakler(DATASOURCE_PATH).forEach((path) => {
    //             var gen = require(path)();
    //             console.log(gen.next());
    //             console.log(gen.next());
    //             assert.equal('object', {});
    //         });
    //     });
    // });

    describe('#mock', function() {
        it('should return json', function() {
            // 遍历文件，得到所有mock文件
            util.wakler(MOCK_PATH).forEach((path) => {
                assert.equal('object', typeof require(path));
            });
        });
    });
});

describe('Controller', function() {
    describe('#router', function() {
        it('should return statusCode = 200', function() {
            // TODO
            // assert.equal('200', router.statusCode);
        });
    });
});

let util = {
    wakler: (root) => {
        let res = [],
            files = fs.readdirSync(root);

        files.forEach((file) => {
            let path = root + '/' + file,
                stat = fs.lstatSync(path);

            // 过滤系统文件
            if (/^\..*/.test(file)) {
                return;
            }

            if (!stat.isDirectory()) {
                res.push(path);
            } else {
                res = res.concat(util.wakler(path));
            }
        });
        return res;
    }
}