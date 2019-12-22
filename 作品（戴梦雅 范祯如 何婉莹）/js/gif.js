var domgif = document.getElementById("Gif");
var myChartgif = echarts.init(domgif);
var app = {};
optiongif = null;
optiongif = {

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
        data: ['建军大业', '战狼2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2017.7.29', '2017.7.31', '2017.8.6', '2017.8.8', '2017.8.12', '2017.8.19', '2017.8.26']
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 10
    }],
    series: [{
            name: '建军大业',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: { normal: {} },
            color: "#9d0b0b",
            data: [357715, 204253, 83252, 68053, 37782, 19973, 14307]
        },
        {
            name: '战狼2',
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
            color: "#da2d2d",
            data: [1111210, 1464344, 1471629, 1562927, 968797, 577596, 335900]
        }
    ]
};;
if (optiongif && typeof optiongif === "object") {
    myChartgif.setOption(optiongif, true);
}