// export const ref = {
//     palette: {
//         primary: {
//             '0': "#FFFFFF",
//         }
//     }
// }

import { Reference, System } from '../types'

export const ref: Reference = {
    palette: {
        primary: {
            "100": "#FFFFFF",
            "99": "#FFFBFF",
            "95": "#F4EEFF",
            "90": "#E5DEFF",
            "80": "#C9BFFF",
            "70": "#AC9FFF",
            "60": "#8F81F5",
            "50": "#7567D8",
            "40": "#5C4DBE",
            "30": "#4433A4",
            "20": "#2D148E",
            "10": "#160066",
            "0":  "#000000",
        },
        secondary: {
            "100": "#FFFFFF",
            "99": "#F3FFF4",
            "95": "#BFFFD3",
            "90": "#54FFA4",
            "80": "#21E288",
            "70": "#00C470",
            "60": "#00A65E",
            "50": "#00894D",
            "40": "#006D3C",
            "30": "#00522B",
            "20": "#00391C",
            "10": "#00210E",
            "0":  "#000000",
        },
        tertiary: {
            "100": "#FFFFFF",
            "99": "#FCFCFC",
            "95": "#FFEDE8",
            "90": "#FFDAD1",
            "80": "#FFB4A4",
            "70": "#FF8A72",
            "60": "#FF5537",
            "50": "#E0361B",
            "40": "#BB1900",
            "30": "#900B00",
            "20": "#670500",
            "10": "#400200",
            "0":  "#000000",
        },
        neutral: {
            "100": "#FFFFFF",
            "99": "#FFFBFF",
            "95": "#F4F0F4",
            "90": "#E5E1E5",
            "80": "#C9C5CA",
            "70": "#ADAAAF",
            "60": "#939094",
            "50": "#78767A",
            "40": "#5F5D62",
            "30": "#48464A",
            "20": "#313033",
            "10": "#1C1B1F",
            "0":  "#000000",
        },
        neutralVariant: {
            "100": "#FFFFFF",
            "99": "#FFFBFF",
            "95": "#F4EFFA",
            "90": "#E5E0EC",
            "80": "#C9C5D0",
            "70": "#ADA9B4",
            "60": "#928F99",
            "50": "#797680",
            "40": "#5F5D66",
            "30": "#47464F",
            "20": "#312F38",
            "10": "#1C1B22",
            "0":  "#000000",
        },
        error: {
            "100": "#FFFFFF",
            "99": "#FCFCFC",
            "95": "#FFEDE9",
            "90": "#FFDAD4",
            "80": "#FFB4A9",
            "70": "#FF897A",
            "60": "#FF5449",
            "50": "#DD3730",
            "40": "#BA1B1B",
            "30": "#930006",
            "20": "#680003",
            "10": "#410001",
            "0": "#000000",
        },
        success: {
            "100": "#FFFFFF",
            "99": "#F3FFF2",
            "95": "#C2FFD0",
            "90": "#90F9AD",
            "80": "#74DC93",
            "70": "#57BF79",
            "60": "#3AA361",
            "50": "#15894A",
            "40": "#006D35",
            "30": "#005226",
            "20": "#003918",
            "10": "#00210B",
            "0": "#000000",
        },
        warning: {
            "100": "#FFFFFF",
            "99": "#FFFBF7",
            "95": "#FFEFC8",
            "90": "#FFE084",
            "80": "#F0C11E",
            "70": "#D1A600",
            "60": "#B28C00",
            "50": "#937300",
            "40": "#755B00",
            "30": "#584400",
            "20": "#3D2E00",
            "10": "#241A00",
            "0": "#000000",
        },
    }
}

export const sys: System = {
    color: {
        // Primary
        primary: ref.palette.primary['80'],
        onPrimary: ref.palette.primary['20'],
        primaryContainer: ref.palette.primary['30'],
        onPrimaryContainer: ref.palette.primary['90'],
        
        // Secondary
        secondary: ref.palette.success['80'],
        onSecondary: ref.palette.success['20'],
        secondaryContainer: ref.palette.success['30'],
        onSecondaryContainer: ref.palette.success['90'],

        // Tertiary
        tertiary: ref.palette.tertiary['80'],
        onTertiary: ref.palette.tertiary['20'],
        tertiaryContainer: ref.palette.tertiary['30'],
        onTertiaryContainer: ref.palette.tertiary['90'],

        // Neutral
        neutral: ref.palette.neutral['80'],
        onNeutral: ref.palette.neutral['20'],
        neutralContainer: ref.palette.neutral['30'],
        onNeutralContainer: ref.palette.neutral['90'],

        // Neutral Variant
        neutralVariant: ref.palette.neutralVariant['80'],
        onNeutralVariant: ref.palette.neutralVariant['20'],
        neutralVariantContainer: ref.palette.neutralVariant['30'],
        onNeutralVariantContainer: ref.palette.neutralVariant['90'],

        // Error
        error: ref.palette.error['80'],
        onRrror: ref.palette.error['20'],
        errorContainer: ref.palette.error['30'],
        onRrrorContainer: ref.palette.error['90'],

        // Warning
        warning: ref.palette.warning['80'],
        onWarning: ref.palette.warning['20'],
        warningContainer: ref.palette.warning['30'],
        onWarningContainer: ref.palette.warning['90'],

        // Success
        success: ref.palette.success['80'],
        onSuccess: ref.palette.success['20'],
        successContainer: ref.palette.success['30'],
        onSuccessContainer: ref.palette.success['90'],
    }
}

// export * from './shared';