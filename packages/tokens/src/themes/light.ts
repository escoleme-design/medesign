import { Reference, System } from '../types'
import { ref } from './shared'

export const sys: System = {
    color: {
        // Primary
        primary: ref.palette.primary['40'],
        onPrimary: ref.palette.primary['100'],
        primaryContainer: ref.palette.primary['90'],
        onPrimaryContainer: ref.palette.primary['10'],
        
        // Secondary
        secondary: ref.palette.success['40'],
        onSecondary: ref.palette.success['100'],
        secondaryContainer: ref.palette.success['90'],
        onSecondaryContainer: ref.palette.success['10'],

        // Tertiary
        tertiary: ref.palette.tertiary['40'],
        onTertiary: ref.palette.tertiary['100'],
        tertiaryContainer: ref.palette.tertiary['90'],
        onTertiaryContainer: ref.palette.tertiary['10'],

        // Neutral
        background: ref.palette.neutral['99'],
        onBackground: ref.palette.neutral['10'],
        surface: ref.palette.neutral['99'],
        onSurface: ref.palette.neutral['10'],

        // Neutral Variant
        surfaceVariant: ref.palette.neutralVariant['90'],
        onSurfaceVariant: ref.palette.neutralVariant['90'],
        outine: ref.palette.neutralVariant['50'],

        // Error
        error: ref.palette.error['40'],
        onRrror: ref.palette.error['100'],
        errorContainer: ref.palette.error['90'],
        onRrrorContainer: ref.palette.error['10'],

        // Warning
        warning: ref.palette.warning['40'],
        onWarning: ref.palette.warning['100'],
        warningContainer: ref.palette.warning['90'],
        onWarningContainer: ref.palette.warning['10'],

        // Success
        success: ref.palette.success['40'],
        onSuccess: ref.palette.success['100'],
        successContainer: ref.palette.success['90'],
        onSuccessContainer: ref.palette.success['10'],
    }
}

export * from './shared';