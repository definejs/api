
const Query = require('@definejs/query');


function stringify(data) {
    let obj = {};

    Object.keys(data).forEach((key) => {
        let value = data[key];

        if (typeof value == 'object') {
            value = JSON.stringify(value);
        }

        obj[key] = value;
    });

    //返回一个 object，
    //函数外部会进一步调用 Query.stringify(obj);
    return obj;
}




module.exports = {

    //针对请求方法为 `post` 时的表单数据。
    //返回字符串或 null。
    make(method, { data, fnStringify, }) {
        if (method == 'get' || !data) {
            return null;
        }

        if (typeof data == 'string') {
            return data;
        }

        fnStringify = fnStringify || stringify;
        data = fnStringify(data);

        //依然不是字符串，则进一步调用默认的。
        if (typeof data != 'string') {
            data = Query.stringify(data);
        }

        return data;
    },
};