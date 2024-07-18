import { createContext, useContext, useReducer } from "react";

export interface Timer {
    name: string;
    duration: number;
}

export interface TimersState {
    isRunning: boolean;
    timers: Timer[];
}

export interface TimersContextValue extends TimersState {
    startTimers: () => void;
    stopTimers: () => void;
    addTimer: (timer: Timer) => void;
}

export const TimersContext = createContext<TimersContextValue | null>(null);


export const useTimersContext = () => {
    const ctx = useContext(TimersContext);
    if (!ctx) {
        throw new Error('useTimers must be used within a TimersContextProvider');
    }
    return ctx;
};

interface TimersContextProviderProps {
    children: React.ReactNode;
}

const initialState: TimersState = {
    isRunning: false,
    timers: []
}

type StartTimers = {
    type: 'START';
}

type StopTimers = {
    type: 'STOP';
}

type AddTimer = {
    type: 'ADD';
    payload: Timer;
}

type Action = StartTimers | StopTimers | AddTimer;

function timersReducer(state: TimersState, action: Action): TimersState {
    switch (action.type) {
        case 'START':
            return { ...state, isRunning: true };
        case 'STOP':
            return { ...state, isRunning: false };
        case 'ADD':
            return { ...state, timers: [...state.timers, action.payload] };
        default:
            return state;
    }
}

export const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        isRunning: timersState.isRunning,
        timers: timersState.timers,
        startTimers: () => {
            dispatch({ type: 'START' });
        },
        stopTimers: () => {
            dispatch({ type: 'STOP' });
        },
        addTimer: (timer: Timer) => {
            dispatch({ type: 'ADD', payload: timer });
        }
    }


    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;

}

