var domWolf2 = document.getElementById("mainWolf2");
var myChartWolf2 = echarts.init(domWolf2);
var app = {};
optionWolf2 = null;
optionWolf2 = {
    title: {
        text: '战狼2'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['OTT端','PC端','移动端']
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
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2017.11','2017.12','2018.1','2018.2','2018.3','2018.4','2018.5','2018.6','2018.7','2018.8']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'OTT端',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[1984.4, 740.0, 695.0, 975.1, 598.2, 942.0, 692.0, 471.6, 403.5, 444.0]
        },
        {
            name:'PC端',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2690.1, 912.4, 713.7, 695.4, 573.4, 433.9, 391.0, 351.2, 303.8, 258.3]
        },
        {
            name:'移动端',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[12832.5, 2948.2, 1837.9, 3163.8, 2041.9, 1094.8, 768.5, 826.2, 783.2, 977.9]
        }
    ]
};
;
if (optionWolf2 && typeof optionWolf2 === "object") {
    myChartWolf2.setOption(optionWolf2, true);
}