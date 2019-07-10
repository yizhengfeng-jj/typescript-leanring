// 接口 可选属性 只读属性

// 接口和可选属性
interface SquareConfig {
    color?: string,
    width?: number
}

interface Square {
    color: string,
    area: number
}

const getInfo = (config:SquareConfig):Square => {
    const initConfig = {color: 'red', area: 100};
    const { color, width } = config;

    if (initConfig.color) {
        initConfig.color = color;
    }

    if (width) {
        initConfig.area = width * width;
    }

    return {...initConfig};
}

// 接口和只读属性
interface config {
    readonly x: string,
    readonly y: number
}

const demo:config = {x: 'aa', y: 12};
const arr:ReadonlyArray<number> = [1, 2, 3];