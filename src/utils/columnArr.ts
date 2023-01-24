const columnCount: number = Math.floor(window.screen.width / 40) + 1

function fillColumnArr (): number[] {
    const columnArr: number[] = [];
    for (let i = 0; columnCount - columnArr.length != 0; i++) {
        let flagNum: number = Math.floor(Math.random() * 200)
        if (flagNum > 10) {
            columnArr.push(flagNum);
        }
    }
    return columnArr;
}

export default fillColumnArr;
