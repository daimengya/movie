var myChartTencent = echarts.init(document.getElementById('mainTencent'));
var data = {
    all: [0.10912, 0.69681, 1.3, 7.7, 13.2, 2.3, 3.7, 8.4, 1.4, 0.61602, 4.8, 1.4],

};

function percent(part, all) {
    var list = [];
    for (var i = 0; i < all.length; i++) {
        var d = part[i] / all[i] * 100;
        list.push(d);
    }
    return list;
}

optionTencent = {
    title: {
        left: 400,
        text: "腾讯视频播放量（亿）",
        show: false
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}:{c0}<br>'

    },
    xAxis: {

        data: ['建党伟业', '一九四二', '智取威虎山', '战狼', '战狼2', '建军大业', '湄公河行动', '红海行动', '厉害了我的国', '中国蓝盔', '流浪地球', '烈火英雄'],
        axisTick: {
            show: true
        },
        axisLabel: {
            interval: 0,
            rotate: -15,
            align: 'left'
        },

    },
    yAxis: {
        splitLine: {
            show: true
        }
    },
    animationDurationUpdate: 1200,
    series: [{
        name: "视频播放量",
        type: 'bar',
        color: '#da2d2d',
        silent: true,
        barWidth: 40,
        stack: "总量",
        data: data.all,
        label: {
            show: true,
            position: 'top',
            formatter: '{c}'
        },

    }, ]
};

myChartTencent.setOption(optionTencent);