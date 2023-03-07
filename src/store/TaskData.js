import { defineStore } from 'pinia'

export const allTask = defineStore('taskData', {
    state: () => ({
        tasks: [{
                id: 1,
                title: "Go to the gym",
                isFav: false
            },
            {
                id: 2,
                title: "Play football",
                isFav: false
            }
        ]
    })
})