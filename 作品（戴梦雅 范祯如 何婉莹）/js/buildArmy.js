var dom12 = document.getElementById("containerThree");
var myChart12 = echarts.init(dom12);

var features12 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart12.clear();
                   myChart12.setOption(option121);
                   stop12();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart12.clear();
                    myChart12.setOption(option122);
                    stop12();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart12.clear();
                    myChart12.setOption(option123);
                    stop12();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart12.clear();
                    myChart12.setOption(option124);
                    stop12();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start12();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop12();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };
option121 = {
    toolbox: {
        feature: features12
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '建军大业',            // First tree
            value: 20.5,
            children: [{
                name: '科幻  8%',       // First leaf of first tree
                value: 8
            }, {
                name: '喜剧  12.5%',       // Second leaf of first tree
                value: 12.5
            }]
        }, {
            name: '建军大业',            // Second tree
            value: 79.5,
            children: [{
                name: '爱情  15.8%',       // First leaf of first tree
                value: 15.8
            }, {
                name: '动作  48.7%',       // Second leaf of first tree
                value: 48.7
            }, {
                name: '其他  15%',       // Second leaf of first tree
                value: 15 
            }]
            }]
        }]
};

option122 = {
   toolbox: {
        feature: features12
    },

    title: {
        text: '活跃地区',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min:0,
        max:100,
        inRange: {
            colorLightness: [0.55, 1]
        }
    },
    series : [
        {
            name:'活跃地区',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:14.20, name:'一线城市'},
                {value:40.80, name:'二线城市'},
                {value:20.00, name:'三线城市'},
                {value:25.00, name:'四线城市'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 100)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 100)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFB6A8',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 50)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

option123 = {
    toolbox: {
        feature: features12
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['20岁以下','20-24岁','25-29岁','30-34岁','35-39岁','40岁以上']
    },
    series: [
        {
            name:'年龄占比',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:8.80, name:'20岁以下'},
                {value:31.20, name:'20-24岁'},
                {value:26.90, name:'25-29岁'},
                {value:14.30, name:'30-34岁'},
                {value:9.40, name:'35-39岁'},
                {value:9.40, name:'40岁以上'}
            ]
        }
    ]
};


option124 = {
    toolbox: {
        feature: features12
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['本科及以上','本科以下','白领','学生','其他']
    },
    series: [
        {
            name:'职业信息',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:32.80, name:'白领', selected:true},
                {value:15.20, name:'学生'},
                {value:52.00, name:'其他'}
            ]
        },
        {
            name:'教育程度',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                    }
                },
            data:[
                {value:69.50, name:'本科及以上'},
                {value:30.50, name:'本科以下'},
            ]
        }
]};


        var arr12 = [option121,option122,option123,option124]

        var interval12 = null;//计时器
            
            
            function start12(){//启动计时器函数
                if(interval12!=null){//判断计时器是否为空
                    clearInterval(interval12);
                    interval12=null;
                }
                var i12 = 1;
                interval12 = setInterval(function setOp(){

                    myChart12.clear();
                    myChart12.setOption(arr12[i12]);
                    //i++;
                    if(i12>=3){
                        i12=0;
                        console.log("here3>=3",i12)
                    }else{
                        i12++;
                        console.log("here3",i12)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop12(){
                console.log("It is")
                clearInterval(interval12);
                interval12 = null;
            }
            myChart12.setOption(option121);
            start12();
