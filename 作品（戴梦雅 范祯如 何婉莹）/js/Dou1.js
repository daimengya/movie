/*
豆瓣 
*/
var dom = document.getElementById("mainDou");
var myChartDou = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        formatter: function(s) {
            console.log(s);
            return s.data[0] + ":" + s.data[1];
        }
    },
    grid: {
        left: '5%',
        right: '20%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['红海行动', '我和我的祖国', '湄公河行动', '流浪地球', '一九四二', '智取威虎山', '战狼2', '中国机长', '战狼', '烈火英雄', '攀登者', '中国蓝盔']
    },
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [
            ['红海行动', 8.3],
            ['我和我的祖国', 8],
            ['湄公河行动', 8],
            ['流浪地球', 7.9],
            ['一九四二', 7.7],
            ['智取威虎山', 7.7],
            ['战狼2', 7.1],
            ['中国机长', 7],
            ['战狼', 6.8],
            ['烈火英雄', 6.6],
            ['攀登者', 6.3],
            ['中国蓝盔', 3.5]
        ],
        type: 'scatter'
    }]
};;
if (option && typeof option === "object") {
    myChartDou.setOption(option, true);
}