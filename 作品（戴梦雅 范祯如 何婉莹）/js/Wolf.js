var domWolf = document.getElementById("mainWolf1");
var myChartWolf = echarts.init(domWolf);
var app = {};
optionWolf = null;
optionWolf = {

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
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2017.5', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11', '2017.12', '2018.1', '2018.2', '2018.3', '2018.4', '2018.5', '2018.6', '2018.7', '2018.8']
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
            data: [81.0, 96.1, 279.9, 1299.9, 412.3, 486.7, 423.4, 232.3, 215.4, 306.5, 220.5, 157.2, 163.2, 114.3, 140.6, 125.4]
        },
        {
            name: 'PC端',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: { normal: {} },
            color: "#da2d2d",
            data: [120.0, 184.3, 570.4, 2148.8, 814.0, 748.8, 631.0, 417.1, 370.6, 334.4, 339.1, 277.4, 202.7, 54.7, 58.2, 57.5]
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
            data: [498.2, 616.2, 2657.9, 8316.5, 1511.3, 1512.8, 1392.6, 594.0, 506.0, 585.6, 448.1, 299.5, 311.1, 145.5, 162.8, 186.3]
        }
    ]
};;
if (optionWolf && typeof optionWolf === "object") {
    myChartWolf.setOption(optionWolf, true);
}