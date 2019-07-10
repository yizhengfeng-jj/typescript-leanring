// 额外属性， 函数类型 可索引类型

// 额外属性


// 函数类型
// 就是定义了参数和返回值
interface funConfig {
    (color: string, width: number): boolean
}

const getWidth:funConfig = (color, width) => {
    return width * width > 300;
}

getWidth('red', 20);

// 索引类型
interface indexArray {
    [index: number]: string
}

const arr1: indexArray = ['json', 'qiong'];
