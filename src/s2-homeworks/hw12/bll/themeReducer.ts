export type ThemeStateType = typeof initState

const initState = {
    themeId: 1,
}

export type StateType = {
    themeId: number,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
