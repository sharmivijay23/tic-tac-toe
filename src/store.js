import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

const gameOver = (data, player) => {
    for (let i = 0; i < 3; i++) {                       // row check
        for (let j = 0; j < 3; j++) {
            if (data[i][j] === player) {
                if (j < 2) {
                    continue;
                }
                else {
                    return player
                }
            }
            break;
        }
    }
    for (let j = 0; j < 3; j++) {                           // column check
        for (let i = 0; i < 3; i++) {
            if (data[i][j] === player) {
                if (i < 2) {
                    continue;
                }
                else {
                    return player
                }
            }
            break;
        }
    }
    for (let i = 0; i < 3; i++) {                           // diagonal check top left to bottom right
        if (data[i][i] === player) {
            if (i < 2) {
                continue;
            }
            else {
                return player
            }
        }
        break;
    }
    for (let i = 0; i < 3; i++) {                           // diagonal check top right to bottom left
        if (data[i][2 - i] === player) {
            if (i < 2) {
                continue;
            }
            else {
                return player
            }
        }
        break;
    }
}

const tieCheck = (data) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!data[i][j])
                return false
        }
    }
    return true
}

const dataStore = (set, get) => ({
    data: [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]],
    currentPlayer: "X",
    winner: undefined,
    tie: undefined,
    turn: (x, y) => {
        const state = get(); // get() returns {data: [...], currentPlayer: "X" | "O"}
        const data = state.data;

        const currentPlayer = state.currentPlayer;

        if (data[x][y] === 'X' || data[x][y] === 'O') {
            return
        }

        const nextPlayer = currentPlayer === "X" ? "O" : "X";

        // Cloning 2d array
        const newData = [];
        for (let i = 0; i < data.length; i++) {
            newData[i] = [...data[i]]
        }

        newData[x][y] = currentPlayer
        const winner = gameOver(newData, currentPlayer)
        const tie = !winner ? tieCheck(newData) : undefined;
        const nextState = {
            currentPlayer: nextPlayer,
            data: newData,
            winner,
            tie,
        };

        set(nextState);

        // set(nextState) -> nextState is object
        // set(reducer) -> reducer is a function which accepts current state as parameter and returns next state
    },

    resetState: () => {

        const resetData = {
            data: [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]],
            currentPlayer: "X",
            winner: undefined,
            tie: undefined,
        }
        set(resetData)
    }
    // storeValue: (a, b) => set((state) => state[a, b] = value),
    // nextPlayer: () => set((state) => state.currentPlayer = !state.currentPlayer)
})

export const useStore = create(dataStore)