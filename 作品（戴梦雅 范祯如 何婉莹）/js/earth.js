/*流浪地球 */

var dom6 = document.getElementById("containerSix");
var myChart6 = echarts.init(dom6);

var features = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart6.clear();
                   myChart6.setOption(option61);
                   stop6();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart6.clear();
                    myChart6.setOption(option62);
                    stop6();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart6.clear();
                    myChart6.setOption(option63);
                    stop6();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart6.clear();
                    myChart6.setOption(option64);
                    stop6();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start6();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop6();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };
option61 = {
     toolbox: {
        feature: features
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '流浪地球',            // First tree
            value: 21.3,
            children: [{
                name: '科幻  8.8%',       // First leaf of first tree
                value: 8.8
            }, {
                name: '喜剧  12.5%',       // Second leaf of first tree
                value: 12.5
            }]
        }, {
            name: '流浪地球',            // Second tree
            value: 78.7,
            children: [{
                name: '爱情  15.2%',       // First leaf of first tree
                value: 15.2
            }, {
                name: '动作  47.2%',       // Second leaf of first tree
                value: 47.2
            }, {
                name: '其他  16.3%',       // Second leaf of first tree
                value: 16.3
            }]
            }]
        }]
};

option62 = {
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
                {value:12.20, name:'一线城市'},
                {value:41.20, name:'二线城市'},
                {value:20.1, name:'三线城市'},
                {value:26.50, name:'四线城市'}
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

option63 = {
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
                {value:5.90, name:'20岁以下'},
                {value:33.50, name:'20-24岁'},
                {value:26.30, name:'25-29岁'},
                {value:15.10, name:'30-34岁'},
                {value:8.60, name:'35-39岁'},
                {value:10.60, name:'40岁以上'}
            ]
        }
    ]
};

option64 = {
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
                {value:49.90, name:'白领', selected:true},
                {value:16.00, name:'学生'},
                {value:34.10, name:'其他'}
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
                {value:65.60, name:'本科及以上'},
                {value:34.40, name:'本科以下'},
            ]
        }
]};

 var arr6 = [option61,option62,option63,option64]
 
        var interval = null;//计时器
            
            
            function start6(){//启动计时器函数
                if(interval!=null){//判断计时器是否为空
                    clearInterval(interval);
                    interval=null;
                }
                var i6 = 1;
                interval = setInterval(function setOp(){

                    myChart6.clear();
                    console.log(typeof arr6[i6]);
                    myChart6.setOption(arr6[i6]);
                    
                    if(i6>=3){
                        i6=0;
                        console.log("here2>=3",i6)
                    }else{
                        i6++;
                        console.log("here2",i6)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop6(){
                
                clearInterval(interval);
                interval = null;
            }
            myChart6.setOption(option61);
            start6();
