$(function() {
        // 三个模块的数据
        function volumeOrder() {
            let volumeData = {
                orderVolume: '12353',
                GMV: "25638",
                branchVolume: "980"
            }
            console.log('你好')
            $(".orderVolume").text('').append(volumeData.orderVolume)
            $(".GMV").text('').append(volumeData.GMV)
            $(".branchVolume").text('').append(volumeData.branchVolume)
        }
        volumeOrder()
            // 电商零售行业的对比
        var networkRetailData = {
            element: 'networkRetailRingChart',
            dataArr: [{
                value: 335,
                name: '一月'
            }, {
                value: 310,
                name: '二月'
            }, {
                value: 234,
                name: '三月'
            }, {
                value: 135,
                name: '四月'
            }, {
                value: 120,
                name: '五月'
            }, {
                value: 251,
                name: '六月'
            }, {
                value: 147,
                name: '七月'
            }, {
                value: 102,
                name: '八月'
            }, {
                value: 400,
                name: '九月'
            }, {
                value: 251,
                name: '十月'
            }],
            color: ['#F8D931', '#FA943F', '#54A0F4', '#CFA972', '#22AC38', '#13B5B1', '#D14D57', '#B575E9', '#80C269']

        }
        publicFunction(networkRetailData)
            // 电商行业分月对比数据
        var EcRingData = {
            element: 'EcRingChart',
            dataArr: [{
                value: 335,
                name: '一月'
            }, {
                value: 310,
                name: '二月'
            }, {
                value: 234,
                name: '三月'
            }, {
                value: 135,
                name: '四月'
            }, {
                value: 120,
                name: '五月'
            }, {
                value: 251,
                name: '六月'
            }, {
                value: 147,
                name: '七月'
            }, {
                value: 102,
                name: '八月'
            }, {
                value: 400,
                name: '九月'
            }, {
                value: 251,
                name: '十月'
            }],
            color: ['#F8D931', '#FA943F', '#54A0F4', '#CFA972', '#22AC38', '#13B5B1', '#D14D57', '#B575E9', '#80C269']

        }
        var crowdData = {
            element: 'crowdChart',
            dataArr: [{
                value: 8978,
                name: '人群总数'
            }, {
                value: 896,
                name: '互联网人数'
            }],
            color: ["#3BC7CD", '#DCDCDC']

        }
        var consumeCrowdData = {
            element: 'consumeCrowdChart',
            dataArr: [{
                value: 30,
                name: '>90岁'
            }, {
                value: 310,
                name: '<10岁'
            }, {
                value: 234,
                name: '30-40岁'
            }, {
                value: 135,
                name: '70-80岁'
            }],
            color: ['#F8D931', '#FA943F', '#54A0F4', '#CFA972', '#22AC38', '#13B5B1', '#D14D57', '#B575E9', '#80C269']

        }
        publicFunction(EcRingData)

        function publicFunction1(data) {
            let option = {
                color: data.color,
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                series: [{
                    type: 'pie',
                    radius: ['40%', '70%'],
                    data: data.dataArr,
                }]

            }
            let turnoverChart = echarts.init(document.getElementById(data.element))
            turnoverChart.setOption(option)
        }
        publicFunction1(crowdData)
        publicFunction1(consumeCrowdData)
            // 环形图的加载函数
        function publicFunction(data) {
            let option = {
                color: data.color,
                tooltip: {
                    trigger: 'item',
                },
                series: [{
                    type: 'pie',
                    radius: ['40%', '70%'],
                    label: {
                        normal: {
                            formatter: '{b|{b}：}{c}  ',
                            rich: {
                                b: {
                                    fontSize: 12,
                                    lineHeight: 33
                                },
                            }
                        }
                    },
                    data: data.dataArr,
                }]

            }
            let turnoverChart = echarts.init(document.getElementById(data.element))
            turnoverChart.setOption(option)
        }

        // 扶贫
        var povertyData = {
            element: 'povertyHisChart',
            name: "电商扶贫",
            color: '#74D578',
            xAxisData: ['县域贫困人口人数', '县域脱贫人数', '电商扶贫人数', '电商扶贫培训人数', '电商扶贫培训人数', '电商扶贫就业人数'],
            seriesData: [10, 52, 200, 334, 390, 330, 220]
        }
        turnoverRetailHis(povertyData)
            // 互联网消费排行榜
        var internetConsumeData1 = {
            element: 'internetConsume1',
            name: "城镇交易额排名",
            color: '#DA4A7D',
            yAxisData: [1, 2, 3, 4, 5],
            seriesData: [1850, 1680, 1489, 1356, 1200],
            yAxisDataShow: true,
            showColor: '#DA4A7D'
        }
        var internetConsumeData2 = {
            element: 'internetConsume2',
            name: "城镇交易额排名",
            color: '#B679F3',
            yAxisData: ['韩张镇', '梁乡村', '千口乡', '福坎镇', '元村镇'],
            seriesData: [1258, 2652, 9856, 2986, 3698],
            yAxisDataShow: true,
            showColor: 'rgba(0,0,0,0.05)'
        }
        var dataShadow1 = [];
        var yMax1 = 2000;
        for (var i = 0; i < internetConsumeData1.seriesData.length; i++) {
            dataShadow1.push(yMax1);
        }

        function internetConsume1(data, dataShadow) {
            let option = {
                color: [data.color],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '8%',
                    right: '2%',
                    bottom: '0%',
                    containLabel: true,
                    show: false,
                },
                xAxis: [{
                    show: false,
                    type: 'value',
                }],
                yAxis: [{
                    show: true,
                    inverse: true,
                    type: 'category',
                    data: data.yAxisData,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        verticalAlign: 'middle',
                        formatter: function(value) {
                            return '{' + value + '| }\n{value|' + value + '}';
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                        lineHeight: 5,
                        rich: {
                            verticalAlign: 'bottom',
                            value: {
                                lineHeight: 15,
                                height: 15,
                                width: 15,
                                borderRadius: 7.5,
                                align: 'center',
                                verticalAlign: 'bottom',
                                backgroundColor: '#FA943F',
                            }
                        },
                    },

                }],
                series: [{ // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: data.showColor }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    barWidth: '40%',
                    data: dataShadow,
                    animation: false
                }, {
                    name: data.name,
                    type: 'bar',
                    barWidth: '40%',
                    animation: false,
                    label: {
                        normal: {
                            show: data.yAxisDataShow,
                            textBorderColor: '#333',
                            textBorderWidth: 2
                        }
                    },
                    data: data.seriesData
                }]
            }
            let turnoverChart = echarts.init(document.getElementById(data.element))
            turnoverChart.setOption(option)
        }
        var dataShadow2 = [];

        var yMax2 = 10000;
        for (var i = 0; i < internetConsumeData2.seriesData.length; i++) {
            dataShadow2.push(yMax2);
        }
        internetConsume1(internetConsumeData1, dataShadow1)
        internetConsume(internetConsumeData2, dataShadow2)

        function internetConsume(data, dataShadow) {
            let option = {
                color: [data.color],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '7%',
                    right: '5%',
                    bottom: '0%',
                    containLabel: true,
                    show: false,
                },
                xAxis: [{
                    show: false,
                    type: 'value',
                }],
                yAxis: [{
                    show: data.yAxisDataShow,
                    type: 'category',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        }
                    },
                    data: data.yAxisData
                }],
                series: [{ // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: data.showColor }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    barWidth: '40%',
                    data: dataShadow,
                    animation: false
                }, {
                    name: data.name,
                    type: 'bar',
                    barWidth: '40%',
                    label: {
                        normal: {
                            show: data.yAxisDataShow,
                            textBorderColor: '#333',
                            textBorderWidth: 2
                        }
                    },
                    data: data.seriesData
                }]
            }
            let turnoverChart = echarts.init(document.getElementById(data.element))
            turnoverChart.setOption(option)
        }

        function turnoverRetailHis(data) {
            let option = {
                color: [data.color],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: data.xAxisData,
                    axisTick: {
                        alignWithLabel: true
                    },
                    fontSize: 12,
                    axisLine: {
                        lineStyle: {
                            color: '#373D43'
                        }
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 12
                    },
                    scalse: false,
                    splitLine: {
                        lineStyle: {
                            color: '#373D43'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    fontSize: 12,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 12
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#373D43'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#373D43'
                        }
                    }
                }],
                series: [{
                    name: data.name,
                    type: 'bar',
                    barWidth: '40%',
                    data: data.seriesData
                }]
            }
            let turnoverChart = echarts.init(document.getElementById(data.element))
            turnoverChart.setOption(option)
        }
        // 地图一
        var data = [{
            name: '泰安',
            value: 112
        }, {
            name: '郑州',
            value: 113
        }, {
            name: '平顶山',
            value: 119
        }, {
            name: '邢台',
            value: 119
        }, {
            name: '宜昌',
            value: 130
        }, {
            name: '石家庄',
            value: 147
        }, {
            name: '金华',
            value: 157
        }, {
            name: '岳阳',
            value: 169
        }, {
            name: '菏泽',
            value: 194
        }, {
            name: '合肥',
            value: 229
        }, {
            name: '武汉',
            value: 273
        }, {
            name: '大庆',
            value: 279
        }];
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        var chinaSiteChartOption = {
            backgroundColor: '#303741',
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '0%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            legend: {
                orient: 'vertical',
                left: 20,
                top: 20,
                y: 'left',
                x: 'right',
                data: ['消费人群分布', '经销商分布'],
                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                },
                padding: [20, 30]
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#326569',
                        borderColor: '#46909B'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [{
                name: '消费人群分布',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#A7FCFF',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                }
            }, {
                name: '经销商分布',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }]
        }
        $.get('https://unpkg.com/echarts@3.6.2/map/json/china.json', function(geoJson) {
            echarts.registerMap('china', geoJson);
            let turnoverHisIndustryChart = echarts.init(document.getElementById('chinaSiteChart'))
            turnoverHisIndustryChart.setOption(chinaSiteChartOption);
        });
        var GMVChart = new CreateSpeed({
            id: "GMVChart",
            title: "县域电商企业交易额(16个)",
            num: false,
            max: 1300,
            unit: '元'
        });
        GMVChart.setData([{
            "name": "西寺庄电商服务站",
            "data": 1123,
            "color": "#5BDCAC"
        }, {
            "name": "中佳易购电子商务有限公司",
            "data": 904,
            "color": "#5BDCAC"
        }, {
            "name": "西审什村电商服务站",
            "data": 845,
            "color": "#5BDCAC"
        }, {
            "name": "邦乐电子商务有限公司",
            "data": 756,
            "color": "#5BDCAC"
        }, {
            "name": "翎翔电子商务有限公司",
            "data": 684,
            "color": "#5BDCAC"
        }]);
        var qybxspm = new CreateSpeed({
            id: "qybxspm",
            title: "县域实物型TOP榜单",
            max: 1300,
            unit: '元',
            num: true,
        });
        qybxspm.setData([{
        "name": "种植",
        "data": 1123,
        "color": "#5BDCAC"
    }, {
        "name": "畜牧",
        "data": 904,
        "color": "#5BDCAC"
    }, {
        "name": "林业",
        "data": 845,
        "color": "#5BDCAC"
    }, {
        "name": "渔业",
        "data": 756,
        "color": "#5BDCAC"
    }, {
        "name": "副业",
        "data": 684,
        "color": "#5BDCAC"
    }]);
        var qybxspms = new CreateSpeed({
            id: "qybxspms",
            title: "县域服务型TOP榜单",
            max: 1300,
            unit: '元',
            num: true,
        });
        qybxspms.setData([{
        "name": "美食",
        "data": 1123,
        "color": "#49C9F1"
    }, {
        "name": "娱乐",
        "data": 904,
        "color": "#49C9F1"
    }, {
        "name": "车票",
        "data": 845,
        "color": "#49C9F1"
    }, {
        "name": "住宿",
        "data": 756,
        "color": "#49C9F1"
    }, {
        "name": "电影",
        "data": 684,
        "color": "#49C9F1"
        }]);
        var logisticsData = new CreateSpeed({
            id: "logisticsData",
            title: "物流数据",
            max: 1300,
            unit: '单',
            num: true,
        });
        logisticsData.setData([{
            "name": "中通",
            "data": 787,
            "color": "#F19B4F"
        }, {
            "name": "圆通",
            "data": 567,
            "color": "#F19B4F"
        }, {
            "name": "EMS",
            "data": 458,
            "color": "#F19B4F"
        }, {
            "name": "顺丰",
            "data": 458,
            "color": "#F19B4F"
        }]);
    })
    // 折线图
function lineCharts() {
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#000'
                }
            }
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: ['2018-1-11', '2018-2-11', '2018-3-11', '2018-4-11', '2018-5-11', '2018-6-11', '2018-7-11']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value} k',
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            data: ['2', '4', '6', '8', '10', '12']
        }],
        series: [{
            name: '电商交易额',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#B44052'
                    }, {
                        offset: 1,
                        color: '#37383E'
                    }])
                }
            },
            data: [2, 8, 5, 2, 10, 6, 12]
        }]
    };

    let turnoverChart = echarts.init(document.getElementById('sumLineCharts'))
    turnoverChart.setOption(option)
}
lineCharts();