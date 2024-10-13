import { AppColors } from "@/constants/colors"


type ThemeMode = 'light'|'dark'

export function useAppTheme() {
    const themeMode:string = "dark"

    return themeMode == 'dark' ? AppColors.dark : AppColors.light
}