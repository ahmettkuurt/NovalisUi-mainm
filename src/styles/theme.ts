export const theme = {
  colors: {
    primary: '#347E89',
    primaryDark: '#1E5967',
    primaryLight: '#75ADB3',

    secondary: '#5F9298',
    secondaryLight: '#DCEAE7',

    accent: '#438D97',
    accentSoft: '#EDF5F3',

    background: '#cde1df',
    backgroundSoft: '#F7F8F6',
    backgroundMuted: '#F0F4F2',

    textPrimary: '#183F49',
    textSecondary: '#60767A',
    textMuted: '#87979A',
    textWhite: '#FFFFFF',

    border: '#DDE7E4',
    borderSoft: '#E9EFED',

    headerBackground: '#FAFCFA',
    cardBackground: '#FCFDFB',
    footerBackground: '#1E5967',

    success: '#438C72',
    error: '#B95757',
    warning: '#C28C35',
  },

  shadows: {
    small: '0 4px 14px rgba(24, 63, 73, 0.06)',
    medium: '0 12px 32px rgba(24, 63, 73, 0.08)',
    large: '0 22px 55px rgba(24, 63, 73, 0.10)',
  },

  borderRadius: {
    small: '8px',
    medium: '14px',
    large: '24px',
    rounded: '999px',
  },

  container: {
    maxWidth: '1280px',
  },
} as const;

export type AppTheme = typeof theme;