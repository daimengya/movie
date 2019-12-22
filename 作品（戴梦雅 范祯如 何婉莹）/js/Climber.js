var dom8 = document.getElementById("containerEight");
var myChart8 = echarts.init(dom8);

var features8 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart8.clear();
                   myChart8.setOption(option1);
                   stop8();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart8.clear();
                    myChart8.setOption(option2);
                    stop8();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart8.clear();
                    myChart8.setOption(option3);
                    stop8();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart8.clear();
                    myChart8.setOption(option4);
                    stop8();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start8();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop8();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };

        option81 = {
            toolbox: {
        feature: features8
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '攀登者',            // First tree
            value: 18.9,
            children: [{
                name: '动画  4.9%',       // First leaf of first tree
                value: 4.9
            }, {
                name: '喜剧  14%',       // Second leaf of first tree
                value: 14
            }]
        }, {
            name: '攀登者',            // Second tree
            value: 81.1,
            children: [{
                name: '剧情  13.5%',       // First leaf of first tree
                value: 13.5
            }, {
                name: '动作  55.7%',       // Second leaf of first tree
                value: 55.7
            }, {
                name: '其他  11.9%',       // Second leaf of first tree
                value: 11.9
            }]
            }]
        }]
};

option82 = {
    toolbox: {
        feature: features8
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
                {value:13.90, name:'一线城市'},
                {value:41.40, name:'二线城市'},
                {value:19.50, name:'三线城市'},
                {value:25.20, name:'四线城市'}
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


option83 = {
    toolbox: {
        feature: features8
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
                {value:2.90, name:'20岁以下'},
                {value:24.90, name:'20-24岁'},
                {value:28.20, name:'25-29岁'},
                {value:20.00, name:'30-34岁'},
                {value:12.70, name:'35-39岁'},
                {value:11.30, name:'40岁以上'}
            ]
        }
    ]
};

option84 = {
    toolbox: {
        feature: features8
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
                {value:56.70, name:'白领', selected:true},
                {value:9.80, name:'学生'},
                {value:33.50, name:'其他'}
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
                {value:40.10, name:'本科及以上'},
                {value:59.90, name:'本科以下'},
            ]
        }
]};


 var arr8 = [option81,option82,option83,option84]

        var interval8 = null;//计时器
            
            
            function start8(){//启动计时器函数
                if(interval8!=null){//判断计时器是否为空
                    clearInterval(interval8);
                    interval8=null;
                }
                var i8 = 1;
                interval8 = setInterval(function setOp(){

                    myChart8.clear();
                    myChart8.setOption(arr8[i8]);
                    //i++;
                    if(i8>=3){
                        i8=0;
                        console.log("here2>=3",i8)
                    }else{
                        i8++;
                        console.log("here2",i8)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop8(){
                
                clearInterval(interval8);
                interval8 = null;
            }
            myChart8.setOption(option81);
            start8();