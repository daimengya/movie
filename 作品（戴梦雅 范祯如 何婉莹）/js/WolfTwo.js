//战狼轮播

var dom10 = document.getElementById("containerTen");
var myChart10 = echarts.init(dom10);

var features10 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart10.clear();
                   myChart10.setOption(option1);
                   stop10();
                }
            },
             myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://img/dis_active.svg',
                onclick: function (){
                	myChart10.clear();
                    myChart10.setOption(option2);
                    stop10();
                }
            },
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart10.clear();
                    myChart10.setOption(option3);
                    stop10();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart10.clear();
                    myChart10.setOption(option4);
                    stop10();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start10();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop10();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };

        option101 = {
            toolbox: {
        feature: features10
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '战狼2',            // First tree
            value: 21.4,
            children: [{
                name: '科幻  8.7%',       // First leaf of first tree
                value: 8.7
            }, {
                name: '喜剧  12.7%',       // Second leaf of first tree
                value: 12.7
            }]
        }, {
            name: '战狼2',            // Second tree
            value: 78.6,
            children: [{
                name: '爱情  15.2%',       // First leaf of first tree
                value: 15.2
            }, {
                name: '动作  48.2%',       // Second leaf of first tree
                value: 48.2
            }, {
                name: '其他  15.2%',       // Second leaf of first tree
                value: 15.2    
            }]
            }]
        }]
};


option102 = {
    toolbox: {
        feature: features10
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
                {value:14.50, name:'一线城市'},
                {value:39.40, name:'二线城市'},
                {value:20.00, name:'三线城市'},
                {value:26.10, name:'四线城市'}
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

option103 = {
    toolbox: {
        feature: features10
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
                {value:7.30, name:'20岁以下'},
                {value:28.80, name:'20-24岁'},
                {value:28.10, name:'25-29岁'},
                {value:16.50, name:'30-34岁'},
                {value:10.20, name:'35-39岁'},
                {value:9.10, name:'40岁以上'}
            ]
        }
    ]
};

option104 = {
    toolbox: {
        feature: features10
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
                {value:31.00, name:'白领', selected:true},
                {value:12.40, name:'学生'},
                {value:56.60, name:'其他'}
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
                {value:72.90, name:'本科及以上'},
                {value:27.10, name:'本科以下'},
            ]
        }
]};

var arr10 = [option101,option102,option103,option104]

        var interval10 = null;//计时器
            
            
            function start10(){//启动计时器函数
                if(interval10!=null){//判断计时器是否为空
                    clearInterval(interval10);
                    interval10=null;
                }
                var i10 = 1;
                interval10 = setInterval(function setOp(){

                    myChart10.clear();
                    myChart10.setOption(arr10[i10]);
                    //i++;
                    if(i10>=3){
                        i10=0;
                        console.log("here2>=3",i10)
                    }else{
                        i10++;
                        console.log("here2",i10)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop10(){
                
                clearInterval(interval10);
                interval10 = null;
            }
            myChart10.setOption(option101);
            start10();