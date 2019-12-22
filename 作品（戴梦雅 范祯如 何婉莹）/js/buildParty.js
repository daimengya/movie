var dom2 = document.getElementById("containerTwo");
var myChart2 = echarts.init(dom2);

var features2 = {
myTool21: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart2.clear();
                   myChart2.setOption(option11);
                   stop2();
                }
            },
myTool22: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart2.clear();
                    myChart2.setOption(option12);
                    stop2();
                }
            },
myTool23: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart2.clear();
                    myChart2.setOption(option13);
                    stop2();
              
                }
            },
myTool24: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart2.clear();
                    myChart2.setOption(option14);
                    stop2();
                }
            },
myTool25: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start2();
                }
            },

myTool26: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop2();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };

        option11 = {
            toolbox: {
        feature: features2
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '建党大业',            // First tree
            value: 28.3,
            children: [{
                name: '科幻  15.7%',       // First leaf of first tree
                value: 15.7
            }, {
                name: '喜剧  12.6%',       // Second leaf of first tree
                value: 12.6
            }]
        }, {
            name: '建党大业',            // Second tree
            value: 71.7,
            children: [{
                name: '爱情  27.8%',       // First leaf of first tree
                value: 27.8
            }, {
                name: '动作  31.7%',       // Second leaf of first tree
                value: 31.7
            }, {
                name: '其他  12.2%',       // Second leaf of first tree
                value: 12.2    
            }]
            }]
        }]
};


option12 = {
   toolbox: {
        feature: features2
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
                {value:13.40, name:'一线城市'},
                {value:42.00, name:'二线城市'},
                {value:17.80, name:'三线城市'},
                {value:26.80, name:'四线城市'}
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


option13 = {
    toolbox: {
        feature: features2
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
                {value:10.30, name:'20岁以下'},
                {value:36.10, name:'20-24岁'},
                {value:27.70, name:'25-29岁'},
                {value:11.50, name:'30-34岁'},
                {value:6.10, name:'35-39岁'},
                {value:8.30, name:'40岁以上'}
            ]
        }
    ]
};



option14 = {
    toolbox: {
        feature: features2
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
                {value:31.80, name:'白领', selected:true},
                {value:18.80, name:'学生'},
                {value:49.30, name:'其他'}
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
                {value:32.40, name:'本科及以上'},
                {value:67.60, name:'本科以下'},
            ]
        }
]};







        var arr1 = [option11,option12,option13,option14]
        
        var interval2 = null;//计时器
        
            
        function start2(){//启动计时器函数
            console.log("start2");
            if(interval2!=null){//判断计时器是否为空
                    clearInterval(interval2);
                    interval2=null;
            }
            var i2 = 0;
            interval2 = setInterval(function setOp(){
                
                
                console.log(i2);
                myChart2.clear();
                myChart2.setOption(arr1[i2]);
                //i++;
                if(i2>=3){
                    i2=0;
                    console.log("here2>=3",i2)
                }else{
                    i2++;
                    console.log("here2",i2)
                }
            },2500);//启动计时器，调用setOp函数，
        }
            
    
            
    function stop2(){
                
        clearInterval(interval2);
        interval2 = null;
    }
    myChart2.setOption(option11);
    start2();
