/* 
单独的一个红海行动，不是多图，具体哪个不太记得了
对应的Id是main
*/

var myChart = echarts.init(document.getElementById('main'));
    var bardata = [{
        value: 2833,
        rank: 1,
        date: "2011年6月15日"
    }, {
        value: 4023.3,
        rank: 1,
        date: "2015年4月2日"
    }, {
        value: 4046.4,
        rank: 3,
        date: "2017年9月30日"
    }, {
        value: 10209.6,
        rank: 1,
        date: "2017年7月27日"
    }, {
        value: 3815.9,
        rank: 2,
        date: "2017年7月27日"
    }, {
        value: 12951.07,
        rank: 4,
        date: "2019年8月1日"
    }, {
        value: 3780.4,
        rank: 3,
        date: "2019年9月30日"
    }, {
        value: 11937.94,
        rank: 2,
        date: "2019年8月1日"
    }, {
        value: 28612.1,
        rank: 1,
        date: "2019年9月30日"
    }, {
        value: 20698.77,
        rank: 2,
        date: "2019年9月30日"
    }, {
        value: 16423.95,
        rank: 3,
        date: "2019年9月30日"
    }, ];
    var xdata = ["建党大业", "战狼", "湄公河行动", "战狼2", "建军大业", "红海行动", "厉害了我的国", "烈火英雄", "我和我的祖国", "中国机长", "攀登者"];
    setTimeout(function() {

        option = {
            title: {
                left: 200,
                text: "近年部分主旋律电影首映日票房"
            },
            legend: {
                data: ['该影片当日票房占比', '其他影片当日票房占比'],
                formatter: function(data) {
                    console.log(data);
                    return data;
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(data) {

                    return "电影名称：" + data[0].name + "<br>当日票房排名：" + data[0].data.rank + "<br>首映票房：" + data[0].value + "<br>" + "上映日期：" + data[0].data.date;
                }
            },
            dataset: {
                source: [

                    ['该影片当日票房占比', 0, 43.6, 20.5, 58.1, 21.9, 10.1, 11.8, 37.7, 43.4, 30.8, 23.9],
                    ['其他影片当日票房占比', 100, 100 - 43.6, 100 - 20.5, 100 - 58.1, 100 - 21.9, 100 - 10.1, 100 - 11.8, 100 - 37.7, 100 - 43.4, 100 - 30.8, 100 - 23.9],

                ]
            },
            xAxis: {
                data: xdata,
                type: 'category',
                boundaryGap: false, //修正横坐标与网格竖轴不对齐情况
                axisLabel: {
                    interval: 0,
                    rotate: -15,
                    align: 'left'
                },

            },
            yAxis: {
                gridIndex: 0
            },
            grid: {
                top: '55%'
            },
            series: [{
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    data: bardata,
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    },
                },

                {
                    type: 'pie',
                    id: 'pie',
                    title: "当日票房占比",
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{d}%'
                    },
                    encode: {
                        value: 1,
                        tooltip: 1
                    }


                }
            ]
        };

        myChart.on('updateAxisPointer', function(event) {
            var xAxisInfo = event.axesInfo[0];

            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: function(data) {

                                return data.data[0] + ' ' + data.data[dimension] + '%';
                            }
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });


            }
        });

        myChart.setOption(option);

    });