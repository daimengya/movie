var dom = document.getElementById("sum");
    var myChartSum = echarts.init(dom);
    var app = {};
    optionSum = null;
    optionSum = {
        title: {
            text: '部分主旋律电影总票房',
            show: false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
        type: 'category',
        data: ['中国蓝盔', '一九四二','建军大业', '建党伟业','厉害了，我的国','战狼', '智取威虎山',  '湄公河行动','烈火英雄','红海行动','流浪地球','战狼2',]
    },
         series: [
        {
            name: '总票房',
            type: 'bar',
            data: [0.18, 3.71, 4.04,4.1, 4.81,5.46,  8.84, 11.88,16.89,36.51,46.69,56.79]
        },
    ]
    };;
    if (optionSum && typeof optionSum === "object") {
        myChartSum.setOption(optionSum, true);
    }