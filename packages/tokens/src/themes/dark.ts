import { Reference, System } from '../types'
import { ref } from './shared'

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
        background: ref.palette.neutral['10'],
        onBackground: ref.palette.neutral['90'],
        surface: ref.palette.neutral['10'],
        onSurface: ref.palette.neutral['90'],

        // Neutral Variant
        surfaceVariant: ref.palette.neutralVariant['30'],
        onSurfaceVariant: ref.palette.neutralVariant['80'],
        outine: ref.palette.neutralVariant['60'],
        
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

export * from './shared';