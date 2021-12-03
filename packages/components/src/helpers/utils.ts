const chroma = require('chroma-js')

export const tupleString = <T extends string[]>(...args: T) => args;

type types = string | number | boolean | undefined | null | void | {};
export const tuple = <T extends types[]>(...args: T) => args;

export const automationAttribute = (defaultKey: string) => ({
    'data-medesign-key': defaultKey
})
export const getBackgroundOverlay = (background: string, opacity: number, stateLayer: string) => {
    const [red, green, blue] = chroma(stateLayer).rgb();
    const layerOpacity = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    return `linear-gradient(0deg, ${layerOpacity}, ${layerOpacity}), ${background}`;
}
  
export const getBackgroundOpacity = (opacity: number, background: string) => {
    const [red, green, blue] = chroma(background).rgb()
    return `rgba(${red},${green},${blue},${opacity})`;
}