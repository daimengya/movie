var myChartOccupy = echarts.init(document.getElementById('mainOccupy'));

    var xData = ['建党伟业', '一九四二', '智取威虎山', '战狼', '战狼2', '建军大业', '湄公河行动', '红海行动', '厉害了我的国', '中国蓝盔', '流浪地球', '烈火英雄', '我和我的祖国', '中国机长', '攀登者'];
    var one = [{
            value: 51.1,
            date: "2011-6-15"
        }, {
            value: 38.1,
            date: "2012-11-29"
        }, {
            value: 18.5,
            date: "2014-12-24"
        }, {
            value: 29.3,
            date: "2015-4-2"
        }, {
            value: 14.4,
            date: "2017-7-27"
        },

        {
            value: 26.4,
            date: "2017-7-27"
        }, {
            value: 20.4,
            date: "2017-9-30"
        }, {
            value: 10.9,
            date: "2018-2-16"
        },


        {
            value: 8.2,
            date: "2018-3-2"
        }, {
            value: 8.8,
            date: "2018-11-23"
        }, {
            value: 11.6,
            date: "2019-2-5"
        },

        {
            value: 36.2,
            date: "2019-8-1"
        }, {
            value: 43.3,
            date: "2019-9-30"
        }, {
            value: 30.8,
            date: "2019-9-30"
        }, {
            value: 25.0,
            date: "2019-9-30"
        },




    ];





    optionOccupy = {
        title: {
            left: 500,
            text: "首日排片占比",
            show: false
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(data) {
                return '电影名称：' + data[0].axisValue + "<br>首日排片占比：" + data[0].data.value + "%<br> 上映日期：" + data[0].data.date
                console.log(data);
            }

        },
        toolbox: {
            show: true,
            feature: {
                myTool1: {
                    show: false,
                    title: '日期升序',
                    icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                    onclick: function() {

                        one.sort(function(a, b) {
                            return new Date(a.date) - new Date(b.date)

                        });

                        myChartOccupy.setOption(optionOccupy);
                    }
                },


            }
        },
        xAxis: {

            data: xData,
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
            name: "首日排片占比",
            type: 'bar',
            color: '#c21f30',
            silent: true,
            barWidth: 40,
            stack: "总量",
            data: one,
            label: {
                show: true,
                position: 'top',
                formatter: '{c}%'
            },

        }, ]
    };
    myChartOccupy.setOption(optionOccupy);
    //自适应
    window.onresize = myChartOccupy.resize;