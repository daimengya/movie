/*
这个是使用在modal的一个多图资源
*/
var dom1 = document.getElementById("containerOne");
var myChart1 = echarts.init(dom1);

var features1 = {
 myTool11: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart1.clear();
                   myChart1.setOption(option21);
                   stop1();
                }
            },
             myTool12: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart1.clear();
                    myChart1.setOption(option22);
                    stop1();
                }
            },
             myTool13: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart1.clear();
                    myChart1.setOption(option23);
                    stop1();
              
                }
            },
             myTool14: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart1.clear();
                    myChart1.setOption(option24);
                    stop1();
                }
            },
             myTool15: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start1();
                }
            },

             myTool16: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop1();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };
option21 = {
	  
	 toolbox: {
        feature: features1
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '红海行动',            // First tree
            value: 21,
            children: [{
                name: '科幻  8.4%',       // First leaf of first tree
                value: 8.4
            }, {
                name: '喜剧  12.6%',       // Second leaf of first tree
                value: 12.6
            }]
        }, {
            name: '红海行动',            // Second tree
            value: 79,
            children: [{
                name: '爱情  15.1%',       // First leaf of first tree
                value: 15.1,
            }, {
                name: '动作  48.4%',       // Second leaf of first tree
                value: 48.4
            }, {
                name: '其他  15.5%',       // Second leaf of first tree
                value: 15.5
            }]
            }]
        }]
};

option22 = {
   toolbox: {
        feature: features1
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
                {value:13.10, name:'一线城市'},
                {value:39.20, name:'二线城市'},
                {value:20.80, name:'三线城市'},
                {value:26.90, name:'四线城市'}
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




option23 = {
	toolbox: {
        feature: features1
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
                {value:4.60, name:'20岁以下'},
                {value:26.30, name:'20-24岁'},
                {value:28.50, name:'25-29岁'},
                {value:18.10, name:'30-34岁'},
                {value:11.70, name:'35-39岁'},
                {value:10.80, name:'40岁以上'}
            ]
        }
    ]
};


option24 = {
	toolbox: {
        feature: features1
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
                {value:47.10, name:'白领', selected:true},
                {value:16.60, name:'学生'},
                {value:36.30, name:'其他'}
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
                {value:29.60, name:'本科及以上'},
                {value:70.40, name:'本科以下'},
            ]
        }
]};
var arr2 = [option21,option22,option23,option24]

var interval1 = null;//计时器

	
function start1(){//启动计时器函数
    console.log("start");
    if(interval1!=null){//判断计时器是否为空
        clearInterval(interval1);
        interval1=null;
    }
    
    var i = 0;
    console.log(i);
    interval1 = setInterval(function setOp(){
        //var i=0;
        myChart1.clear();
        myChart1.setOption(arr2[i]);
        console.log(i,"内部的函数");
        //i++;
        if(i>=3){
            i=0;
            console.log("here")
            
        }else{
            ++i;
            console.log("here",i)
        }
        
    },2500);//启动计时器，调用setOp函数，
}			

function stop1(){
				
    clearInterval(interval1);
    interval1 = null;
    console.log("stop");
}
myChart1.setOption(option21);
start1();

			
			
			