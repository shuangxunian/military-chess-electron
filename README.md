# 计算机军棋博弈棋盘

## 棋子参数
### 棋子
```javascript
const box = new Box({
    x: 100,
    y: 100,
    fill: '#FFFFFF',
    stroke: '#FF0000',
    strokeWidth: 2,
    children: [{
        tag: 'Text',
        text: '军    棋',
        fill: 'black',
        fontSize: 18,
        padding: [5, 20],
        textAlign: 'left',
        verticalAlign: 'top'
    }]
})
```

### 兵站
```javascript
const box = new Box({
    x: 100,
    y: 100,
    fill: '#FFFFFF',
    stroke: '#FF0000',
    strokeWidth: 2,
    children: [{
        tag: 'Text',
        text: '兵    站',
        fill: '#FF0000',
        fontSize: 18,
        fontWeight: 500,
        padding: [0, 3],
        textAlign: 'left',
        verticalAlign: 'top'
    }]
})
```

### 下大本营
```javascript
const box = new Box({
    x: 100,
    y: 100,
    height: 50,
    fill: '#FFFFFF',
    children: [
        {
            tag: 'Ellipse',
            width: 100,
            height: 100,
            startAngle: -180,
            endAngle: 0,
            fill: '#FF0000'
        },
        {
            // x: 120,
            y: 20,
            tag: 'Rect',
            width: 100,
            height: 30,
            fill: '#FF0000'
        },
        {
            tag: 'Text',
            text: '大本营',
            fill: '#FFFFFF',
            fontSize: 20,
            fontWeight: 500,
            padding: [20],
            textAlign: 'left',
            verticalAlign: 'top'
        }
    ]
})
```

### 上大本营
```javascript
const box = new Box({
    x: 100,
    y: 100,
    height: 50,
    fill: '#FFFFFF',
    children: [
        {
            tag: 'Rect',
            width: 100,
            height: 30,
            fill: '#FF0000'
        },
        {
            y: -50,
            tag: 'Ellipse',
            width: 100,
            height: 100,
            startAngle: 0,
            endAngle: 180,
            fill: '#FF0000'
        },
        {
            tag: 'Text',
            text: '大本营',
            fill: '#FFFFFF',
            fontSize: 20,
            fontWeight: 500,
            padding: [0, 20],
            textAlign: 'left',
            verticalAlign: 'top'
        }
    ]
})
```



## 通信

