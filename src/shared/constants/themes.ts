import { DefaultTheme } from "@react-navigation/native";
import { adaptNavigationTheme, MD3LightTheme, MD3Theme } from "react-native-paper";
import merge from 'deepmerge';

export const AppLightTheme: MD3Theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#904A4B',
        onPrimary: '#FFFFFF',
        primaryContainer: '#FFDAD9',
        onPrimaryContainer: '#3B080D',
        secondary: '#775656',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#FFDAD9',
        onSecondaryContainer: '#2C1515',
        tertiary: '#755A2F',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#FFDEAD',
        onTertiaryContainer: '#281900',
        error: '#BA1A1A',
        onError: '#FFFFFF',
        errorContainer: '#FFDAD6',
        onErrorContainer: '#410002',
        outline: '#857372',
        background: '#FFF8F7',
        onBackground: '#221919',
        surface: '#FFF8F7',
        onSurface: '#221919',
        surfaceVariant: '#F4DDDC',
        onSurfaceVariant: '#524343',
        inverseSurface: '#382E2E',
        inverseOnSurface: '#FFEDEC',
        inversePrimary: '#FFB3B2',
        shadow: '#000000',
        outlineVariant: '#524343',
        scrim: '#000000',
    }
};

export const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme, materialLight: AppLightTheme });
export const AppTheme = merge(AppLightTheme, LightTheme);
