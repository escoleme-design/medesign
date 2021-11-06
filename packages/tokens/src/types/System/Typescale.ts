
type TypeScaleSpec = {
    font: string,
    lineHeight: number,
    size: number,
    tracking: number,
    weight: number,
}

export type TypeScale = {
    // Display
    displayLarge: TypeScaleSpec,
    displayMedium: TypeScaleSpec,
    displaySmall: TypeScaleSpec,
    // Headline
    headlineLarge: TypeScaleSpec,
    headlineMedium: TypeScaleSpec,
    headlineSmall: TypeScaleSpec,
    // Title
    titleLarge: TypeScaleSpec,
    titleMedium: TypeScaleSpec,
    titleSmall: TypeScaleSpec,
    // Label
    labelLarge: TypeScaleSpec,
    labelMedium: TypeScaleSpec,
    labelSmall: TypeScaleSpec,
    // Body
    bodyLarge: TypeScaleSpec,
    bodyMedium: TypeScaleSpec,
    bodySmall: TypeScaleSpec,
}