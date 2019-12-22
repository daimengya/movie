//中国机长轮播图片

var dom11 = document.getElementById("container11");
var myChart11 = echarts.init(dom11);

var features11 = {
 myTool1: {
            	
                show: true,
                title: '偏好',
                icon: 'image://img/love_active.svg',
                onclick: function (){
                	
                	myChart11.clear();
                   myChart11.setOption(option1);
                   stop11();
                }
            },
             /*myTool2: {
            	
                show: true,
                title: '地区',
                icon: 'image://image/dis_active.svg',
                onclick: function (){
                	myChart11.clear();
                    myChart11.setOption(option2);
                    stop();
                }
            },*/
             myTool3: {
            	
                show: true,
                title: '年龄',
                icon: 'image://img/age_active.svg',
                onclick: function (){
                	myChart11.clear();
                    myChart11.setOption(option3);
                    stop11();
              
                }
            },
             myTool4: {
            	
                show: true,
                title: '职业教育',
                icon: 'image://img/work_active.svg',
                onclick: function (){
                	myChart11.clear();
                    myChart11.setOption(option4);
                    stop11();
                }
            },
             myTool5: {
            	
                show: true,
                title: '开始轮播',
                icon: 'image://img/start.svg',
                onclick: function (){
                	 layer.msg("开启轮播");	
                	start11();
                }
            },

             myTool6: {
                show: true,
                title: '暂停轮播',
                icon: 'image://img/stop.svg',
                onclick: function (){
                	
                	 	stop11();
						layer.msg("停止轮播");	
					    	
				
                }
            },
        };

        option111 = {

             toolbox: {
        feature: features11
    },

    series: [{
        type: 'treemap',
        data: [{
            name: '中国机长',            // First tree
            value: 17.3,
            children: [{
                name: '动画  4.6%',       // First leaf of first tree
                value: 4.6
            }, {
                name: '喜剧  12.7%',       // Second leaf of first tree
                value: 12.7
            }]
        }, {
            name: '中国机长',            // Second tree
            value: 82.7,
            children: [{
                name: '剧情  14%',       // First leaf of first tree
                value: 14
            }, {
                name: '动作  58.7%',       // Second leaf of first tree
                value: 58.7
            }, {
                name: '其他  10%',       // Second leaf of first tree
                value: 10
            }]
            }]
        }]
};

option113 = {

     toolbox: {
        feature: features11
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
                {value:3.0, name:'20岁以下'},
                {value:24.40, name:'20-24岁'},
                {value:28.80, name:'25-29岁'},
                {value:20.20, name:'30-34岁'},
                {value:13.00, name:'35-39岁'},
                {value:10.60, name:'40岁以上'}
            ]
        }
    ]
};

option114 = {

     toolbox: {
        feature: features11
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
                {value:54.00, name:'白领', selected:true},
                {value:8.20, name:'学生'},
                {value:37.80, name:'其他'}
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
                {value:37.90, name:'本科及以上'},
                {value:62.10, name:'本科以下'},
            ]
        }
]};

var arr11 = [option111,option113,option114]

        var interval11 = null;//计时器
            
            
            function start11(){//启动计时器函数
                if(interval11!=null){//判断计时器是否为空
                    clearInterval(interval11);
                    interval11=null;
                }
                var i11 = 1;
                interval11 = setInterval(function setOp(){

                    myChart11.clear();
                    myChart11.setOption(arr11[i11]);
                    //i++;
                    if(i11>=2){
                        i11=0;
                        console.log("here2>=3",i11)
                    }else{
                        i11++;
                        console.log("here2",i11)
                    }
                },2500);//启动计时器，调用setOp函数，
            }
            
            
            
            function stop11(){
                
                clearInterval(interval11);
                interval11 = null;
            }
            myChart11.setOption(option111);
            start11();
