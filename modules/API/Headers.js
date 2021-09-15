


module.exports = {

    make(meta, method, more) {
        let headers = meta.headers || {};
        let defaults = headers[''] || {};       //针对全部的请求头。
        let methods = headers[method] || {};    //针对特定类型的请求头，如 `get`、`post`。

        let all = Object.assign({}, defaults, methods, more);

        
        return all;

    },
};