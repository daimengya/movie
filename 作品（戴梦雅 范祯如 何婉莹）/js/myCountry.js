var dom4 = document.getElementById("containerFour");
var myChart4 = echarts.init(dom4);

var features4 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart4.clear();
                   myChart4.setOption(option41);
                   stop4();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart4.clear();
                    myChart4.setOption(option42);
                    stop4();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart4.clear();
                    myChart4.setOption(option43);
                    stop4();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart4.clear();
                    myChart4.setOption(option44);
                    stop4();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start4();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop4();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };


        option41 = {
             toolbox: {
        feature: features4
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '厉害了我的国',            // First tree
            value: 20.8,
            children: [{
                name: '科幻  8.3%',       // First leaf of first tree
                value: 8.3
            }, {
                name: '喜剧  12.5%',       // Second leaf of first tree
                value: 12.5
            }]
        }, {
            name: '厉害了我的国',            // Second tree
            value: 79.2,
            children: [{
                name: '爱情  15.6%',       // First leaf of first tree
                value: 15.6
            }, {
                name: '动作  48.3%',       // Second leaf of first tree
                value: 48.3
            }, {
                name: '其他  15.3%',       // Second leaf of first tree
                value: 15.3
            }]
            }]
        }]
};

option42 = {
     toolbox: {
        feature: features4
    },
   /* backgroundColor: '#2c343c',*/

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
                {value:14.60, name:'一线城市'},
                {value:40.70, name:'二线城市'},
                {value:19.30, name:'三线城市'},
                {value:25.40, name:'四线城市'}
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

option43 = {
     toolbox: {
        feature: features4
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
                {value:4.20, name:'20岁以下'},
                {value:27.30, name:'20-24岁'},
                {value:29.70, name:'25-29岁'},
                {value:17.60, name:'30-34岁'},
                {value:11.00, name:'35-39岁'},
                {value:10.20, name:'40岁以上'}
            ]
        }
    ]
};


option44 = {
     toolbox: {
        feature: features4
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
                {value:44.50, name:'白领', selected:true},
                {value:16.80, name:'学生'},
                {value:38.70, name:'其他'}
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
                {value:28.30, name:'本科及以上'},
                {value:71.70, name:'本科以下'},
            ]
        }
]};



        var arr4 = [option41,option42,option43,option44]

        var interval4 = null;//计时器
            
            
            function start4(){//启动计时器函数
                if(interval4!=null){//判断计时器是否为空
                    clearInterval(interval4);
                    interval4=null;
                }
                var i4 = 1;
                interval4 = setInterval(function setOp(){

                    myChart4.clear();
                    myChart4.setOption(arr4[i4]);
                    if(i4>=3){
                        i4=0;
                        console.log("here2>=3",i4)
                    }else{
                        i4++;
                        console.log("here2",i4)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop4(){
                
                clearInterval(interval4);
                interval4 = null;
            }
            myChart4.setOption(option41);
            start4();
