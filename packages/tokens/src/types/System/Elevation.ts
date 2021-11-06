import { SurfaceTone } from "../Reference/SurfaceTones"

type ShadowOffset = {
    x: number,
    y: number,
}

type Shadow = {
    shadowOffset: ShadowOffset,
    blur: number,
    spread: number,
    opacity: number,
    color: string
}

export type ElevationLevel = {
    surfaceTones: SurfaceTone | null,
    elevation: number | null,
    shadow: Shadow[] | null,
}

export type Elevation = {
    level0: ElevationLevel,
    level1: ElevationLevel,
    level2: ElevationLevel,
    level3: ElevationLevel,
    level4: ElevationLevel,
    level5: ElevationLevel,
}