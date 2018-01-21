/**
 * 多重继承
 * 将 参数传过来的类, mixins 装饰类
 *
 * @export
 * @param {(any | any[])} classes 支持类数组
 * @returns {ClassDecorator}
 */
export function DClassInherit(classes: any | any[]): ClassDecorator {
    if (!Array.isArray(classes)) classes = [classes];

    return (target: any) => {
        applyMixins(target, classes);
    };
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
