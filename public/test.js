const store = {
    data: 0,
    increment: () => {
        const data = 1
        console.log(data)
    }
}




const testArray = () => {

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            console.log(i, j)

        }
    }
}


// 0, 0 0, 1 0, 2
//     1, 0 1, 1 1, 2
//     2, 0 2, 1 2, 2
//     0, 0 1, 0 2, 0
//     0, 1 1, 1 2, 1
//     0, 2 1, 2 2, 2
//     0, 0 1, 1 2, 2
//     0, 2 1, 1 2, 0