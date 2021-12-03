import { Theme } from '@escoleme/medesign-tokens';
import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}