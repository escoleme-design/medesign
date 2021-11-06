import { Button } from "./Component/Button"
import { Palette } from "./Reference/Palette"
import { SurfaceTones } from "./Reference/SurfaceTones"
import { Color } from "./System/Color"
import { Elevation } from "./System/Elevation"
import { States } from "./System/State"
import { TypeScale } from "./System/Typescale"

export type Component = {
    button: Button
}

export type Reference = {
    palette: Palette,
    surfaceTones: SurfaceTones,
}

export type System = {
    color: Color,
    elevation: Elevation,
    state: States,
    typescale: TypeScale,
}

export interface Theme {
    ref: Reference,
    sys: System,
    comp: Component,
}