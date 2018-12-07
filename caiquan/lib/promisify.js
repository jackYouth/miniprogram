/**
 * 使用时 const newFn = promisify(fn)，这就会返回一个promise函数
 *    当 newFn(options,,)时，就会将options等参数传入fn中执行，并返回执行过的promise
 */
module.exports = (api) => {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
        });
    }
}