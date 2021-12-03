export declare const tupleString: <T extends string[]>(...args: T) => T;
declare type types = string | number | boolean | undefined | null | void | {};
export declare const tuple: <T extends types[]>(...args: T) => T;
export declare const automationAttribute: (defaultKey: string) => {
    'data-medesign-key': string;
};
export declare const getBackgroundOverlay: (background: string, opacity: number, stateLayer: string) => string;
export declare const getBackgroundOpacity: (opacity: number, background: string) => string;
export {};
