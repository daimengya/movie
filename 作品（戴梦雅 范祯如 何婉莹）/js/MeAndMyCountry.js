//我和我的祖国

var dom9 = document.getElementById("containerNine");
var myChart9 = echarts.init(dom9);

var features9 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart9.clear();
                   myChart9.setOption(option91);
                   stop9();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart9.clear();
                    myChart9.setOption(option92);
                    stop9();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart9.clear();
                    myChart9.setOption(option93);
                    stop9();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart9.clear();
                    myChart9.setOption(option94);
                    stop9();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start9();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop9();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };

        option91 = {
            toolbox: {
        feature: features9
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '我和我的祖国',            // First tree
            value: 24.9,
            children: [{
                name: '动画  7.2%',       // First leaf of first tree
                value: 7.2
            }, {
                name: '喜剧  17.7%',       // Second leaf of first tree
                value: 17.7
            }]
        }, {
            name: '我和我的祖国',            // Second tree
            value: 75.1,
            children: [{
                name: '剧情  17.3%',       // First leaf of first tree
                value: 17.3
            }, {
                name: '动作  45.7%',       // Second leaf of first tree
                value: 45.7
            }, {
                name: '其他  12.1%',       // Second leaf of first tree
                value: 12.1
            }]
            }]
        }]
};

option92 = {
    toolbox: {
        feature: features9
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
                {value:12.90, name:'一线城市'},
                {value:41.70, name:'二线城市'},
                {value:20.10, name:'三线城市'},
                {value:25.30, name:'四线城市'}
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

option93 = {
    toolbox: {
        feature: features9
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
                {value:3.90, name:'20岁以下'},
                {value:29.60, name:'20-24岁'},
                {value:29.00, name:'25-29岁'},
                {value:19.00, name:'30-34岁'},
                {value:9.40, name:'35-39岁'},
                {value:9.10, name:'40岁以上'}
            ]
        }
    ]
};


option94 = {
    toolbox: {
        feature: features9
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
                {value:56.60, name:'白领', selected:true},
                {value:10.50, name:'学生'},
                {value:32.80, name:'其他'}
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
                {value:63.40, name:'本科及以上'},
                {value:36.60, name:'本科以下'},
            ]
        }
]};
 var arr9 = [option91,option92,option93,option94]

        var interval9 = null;//计时器
            
            
            function start9(){//启动计时器函数
                if(interval9!=null){//判断计时器是否为空
                    clearInterval(interval9);
                    interval9=null;
                }
                var i9 = 1;
                interval9 = setInterval(function setOp(){

                    myChart9.clear();
                    myChart9.setOption(arr9[i9]);
                    //i++;
                    if(i9>=3){
                        i9=0;
                        console.log("here2>=3",i9)
                    }else{
                        i9++;
                        console.log("here2",i9)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop9(){
                
                clearInterval(interval9);
                interval9 = null;
            }
            myChart9.setOption(option91);
            start9();
