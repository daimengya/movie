/*湄公河行动 */

var dom7 = document.getElementById("containerSeven");
var myChart7 = echarts.init(dom7);

var features = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart7.clear();
                   myChart7.setOption(option71);
                   stop7();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart7.clear();
                    myChart7.setOption(option72);
                    stop7();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart7.clear();
                    myChart7.setOption(option73);
                    stop7();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart7.clear();
                    myChart7.setOption(option74);
                    stop7();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start7();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop7();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };
option71 = {
     toolbox: {
        feature: features
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '湄公河行动',            // First tree
            value: 27.7,
            children: [{
                name: '科幻  15.4%',       // First leaf of first tree
                value: 15.4
            }, {
                name: '喜剧  12.3%',       // Second leaf of first tree
                value: 12.3
            }]
        }, {
            name: '湄公河行动',            // Second tree
            value: 72.3,
            children: [{
                name: '爱情  28.8%',       // First leaf of first tree
                value: 28.8
            }, {
                name: '动作  31.8%',       // Second leaf of first tree
                value: 31.8
            }, {
                name: '其他  11.7%',       // Second leaf of first tree
                value: 11.7  
            }]
            }]
        }]
};

option72 = {
     toolbox: {
        feature: features
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
                {value:13.50, name:'一线城市'},
                {value:43.20, name:'二线城市'},
                {value:19.30, name:'三线城市'},
                {value:24.00, name:'四线城市'}
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

option73 = {
     toolbox: {
        feature: features
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
                {value:33.10, name:'20-24岁'},
                {value:28.50, name:'25-29岁'},
                {value:13.70, name:'30-34岁'},
                {value:7.90, name:'35-39岁'},
                {value:7.90, name:'40岁以上'}
            ]
        }
    ]
};

option74 = {
     toolbox: {
        feature: features
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
                {value:13.80, name:'学生'},
                {value:53.30, name:'其他'}
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
                {value:30.00, name:'本科及以上'},
                {value:70.00, name:'本科以下'},
            ]
        }
]};

 var arr7 = [option71,option72,option73,option74]

        var interval7 = null;//计时器
            
            
            function start7(){//启动计时器函数
                if(interval7!=null){//判断计时器是否为空
                    clearInterval(interval7);
                    interval7=null;
                }
                var i7 = 1;
                interval7 = setInterval(function setOp(){

                    myChart7.clear();
                    myChart7.setOption(arr7[i7]);
                    if(i7>=3){
                        i7=0;
                        console.log("here2>=3",i7)
                    }else{
                        i7++;
                        console.log("here2",i7)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop7(){
                
                clearInterval(interval7);
                interval7 = null;
            }
            myChart7.setOption(option71);
            start7();