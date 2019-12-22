//中国蓝盔的轮播
//1 2 3 12 10 11 8 9 7 4 5 6
var dom3 = document.getElementById("container12");
var myChart3 = echarts.init(dom3);

var features3 = {
 myTool31: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart3.clear();
                   myChart3.setOption(option31);
                   stop3();
                }
            },
             myTool32: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart3.clear();
                    myChart3.setOption(option32);
                    stop3();
                }
            },
             myTool33: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart3.clear();
                    myChart3.setOption(option33);
                    stop3();
              
                }
            },
             myTool34: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart3.clear();
                    myChart3.setOption(option34);
                    stop3();
                }
            },
             myTool35: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start3();
                }
            },

             myTool36: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop3();
						layer.msg("停止轮播");	
					    console.log("try to stop")
                }
            },
        };

option31 = {
             toolbox: {
        feature: features3
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '中国蓝盔',            // First tree
            value: 20.4,
            children: [{
                name: '科幻  8.7%',       // First leaf of first tree
                value: 8.7
            }, {
                name: '喜剧  11.7%',       // Second leaf of first tree
                value: 11.7
            }]
        }, {
            name: '中国蓝盔',            // Second tree
            value: 79.6,
            children: [{
                name: '爱情  13%',       // First leaf of first tree
                value: 13
            }, {
                name: '动作  52.5%',       // Second leaf of first tree
                value: 52.5
            }, {
                name: '其他  14.1%',       // Second leaf of first tree
                value: 14.1
            }]
            }]
        }]
};

option32 = {
     toolbox: {
        feature: features3
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
                {value:11.00, name:'一线城市'},
                {value:39.70, name:'二线城市'},
                {value:21.30, name:'三线城市'},
                {value:28.00, name:'四线城市'}
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

option33 = {
     toolbox: {
        feature: features3
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
                {value:4.10, name:'20岁以下'},
                {value:25.00, name:'20-24岁'},
                {value:25.40, name:'25-29岁'},
                {value:20.20, name:'30-34岁'},
                {value:12.80, name:'35-39岁'},
                {value:12.50, name:'40岁以上'}
            ]
        }
    ]
};


option34 = {
     toolbox: {
        feature: features3
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
                {value:55.10, name:'白领', selected:true},
                {value:9.80, name:'学生'},
                {value:35.10, name:'其他'}
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
                {value:61.00, name:'本科及以上'},
                {value:39.00, name:'本科以下'},
            ]
        }
]};



var arr3 = [option31,option32,option33,option34]

var interval3 = null;//计时器
            
            
function start3(){//启动计时器函数
    if(interval3!=null){//判断计时器是否为空
        clearInterval(interval3);
        interval3=null;
    }
    var i3 = 1;
    interval3 = setInterval(function setOp(){

    myChart3.clear();
    myChart3.setOption(arr3[i3]);
    //i++;
    if(i3>=3){
        i3=0;
        console.log("here3>=3",i3)
    }else{
        i3++;
        console.log("here3",i3)
    }
    },2500);//启动计时器，调用setOp函数，
}
            
            
            
function stop3(){
    console.log("enheng,It is stop")         
    clearInterval(interval3);
    interval3 = null;
}
myChart3.setOption(option31);
start3();