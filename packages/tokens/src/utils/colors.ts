const chroma = require('chroma-js')

export const darken = (color: string, saturacao: number, light: number): string => {
    return chroma.hsl(chroma(color).hsl()[0], saturacao, light).hex()
}