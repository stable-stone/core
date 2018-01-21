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
