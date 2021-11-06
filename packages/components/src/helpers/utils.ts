export const tupleString = <T extends string[]>(...args: T) => args;

type types = string | number | boolean | undefined | null | void | {};
export const tuple = <T extends types[]>(...args: T) => args;

export const automationAttribute = (defaultKey: string) => ({
    'data-medesign-key': defaultKey
})