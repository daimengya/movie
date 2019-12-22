// 基于准备好的dom，初始化echarts实例
var myChartHot = echarts.init(document.getElementById('mainHot'));
var mydata = {
    source: [
        ['热度类型', '热度指数', '媒体曝光', '粉丝活跃度'],
        ['红海行动', 91.49, 62.34, 74.88],
        ['湄公河行动', 90.32, 61.89, 76.94],
        ['流浪地球', 71.36, 30, 30],
        ['中国机长', 69.1, 30, 30],
        ['我和我的祖国', 69, 30, 30],
        ['烈火英雄', 65, 30, 30],
    ]
}
optionHot = {
    title: {
        left: 200,
        text: "电影热度榜",
        show: false
    },
    legend: {},
    tooltip: {},
    dataset: mydata,
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    series: [{
        type: 'bar',
        itemStyle: {
            color: "#9d0b0b"
        }
    }, {
        type: 'bar',
        itemStyle: {
            color: "#da2d2d"
        }
    }, {
        type: 'bar',
        itemStyle: {
            color: "#eb8242"
        }
    }]
};

myChartHot.setOption(optionHot);