export type State = {
    stateLayerOpacity: number,
    stateLayerColor: string,
    containerColor: string,
    contentColor: string,
}

type StateDisabled = {
    color: string,
    contentOpacity: number,
    containerOpacity: number,
}

export type States = {
    hover: State,
    focus: State,
    pressed: State,
    dragged: State,
    disabled: StateDisabled,
}