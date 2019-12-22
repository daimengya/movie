var domE = document.getElementById("mainEquip");
var myChartE = echarts.init(domE);
var app = {};
optionE = null;
optionE = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['OTT端', 'PC端', '移动端']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '13%',
        right: '4%',
        bottom: '30%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['战狼', '湄公河行动', '战狼2', '建军大业', '红海行动']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: 'OTT端',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            color: "#9d0b0b",
            data: [125.4, 190.7, 444, 155.4, 396]
        },
        {
            name: 'PC端',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            color: "#da2d2d",
            data: [57.5, 97.6, 258.3, 31, 317.4]
        },
        {
            name: '移动端',
            type: 'line',
            smooth: true,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: { normal: {} },
            color: "#eb8242",
            data: [186.3, 303.1, 977.9, 123.7, 1214.4]
        }
    ]
};;
if (optionE && typeof optionE === "object") {
    myChartE.setOption(optionE, true);
}