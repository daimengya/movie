var dom5 = document.getElementById("containerFive");
var myChart5 = echarts.init(dom5);

var features5 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart5.clear();
                   myChart5.setOption(option51);
                   stop5();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart5.clear();
                    myChart5.setOption(option52);
                    stop5();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart5.clear();
                    myChart5.setOption(option53);
                    stop5();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart5.clear();
                    myChart5.setOption(option54);
                    stop5();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start5();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop5();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };


        option51 = {
              toolbox: {
        feature: features5
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '烈火英雄',            // First tree
            value: 29.6,
            children: [{
                name: '动画  10.3%',       // First leaf of first tree
                value: 10.3
            }, {
                name: '喜剧  19.3%',       // Second leaf of first tree
                value: 19.3
            }]
        }, {
            name: '烈火英雄',            // Second tree
            value: 70.4,
            children: [{
                name: '剧情  16%',       // First leaf of first tree
                value: 16
            }, {
                name: '动作  36.5%',       // Second leaf of first tree
                value: 36.5
            }, {
                name: '其他  17.9%',       // Second leaf of first tree
                value: 17.9
            }]
            }]
        }]
};


option52 = {
      toolbox: {
        feature: features5
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
                {value:11.70, name:'一线城市'},
                {value:42.00, name:'二线城市'},
                {value:20.30, name:'三线城市'},
                {value:26.00, name:'四线城市'}
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

option53 = {
      toolbox: {
        feature: features5
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
                {value:5.00, name:'20岁以下'},
                {value:30.70, name:'20-24岁'},
                {value:27.30, name:'25-29岁'},
                {value:17.50, name:'30-34岁'},
                {value:9.40, name:'35-39岁'},
                {value:10.10, name:'40岁以上'}
            ]
        }
    ]
};

option54 = {
      toolbox: {
        feature: features5
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
                {value:53.70, name:'白领', selected:true},
                {value:12.30, name:'学生'},
                {value:34.00, name:'其他'}
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
                {value:63.00, name:'本科及以上'},
                {value:37.00, name:'本科以下'},
            ]
        }
]};


var arr5 = [option51,option52,option53,option54]

        var interval5 = null;//计时器
            
            
            function start5(){//启动计时器函数
                if(interval5!=null){//判断计时器是否为空
                    clearInterval(interval5);
                    interval5=null;
                }
                var i5 = 1;
                interval5 = setInterval(function setOp(){

                    myChart5.clear();
                    myChart5.setOption(arr5[i5]);
                    if(i5>=3){
                        i5=0;
                        console.log("here2>=3",i5)
                    }else{
                        i5++;
                        console.log("here2",i5)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop5(){
                
                clearInterval(interval5);
                interval5 = null;
            }
            myChart5.setOption(option51);
            start5();
