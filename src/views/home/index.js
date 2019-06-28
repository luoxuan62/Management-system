import React from "react"
import { Row, Col } from 'antd';
import echarts from 'echarts';
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="gutter-example">
                    <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box" style={{background:"#c33",height:"200px",fontSize:"20px",color:"#fff",textAlign:"center",lineHeight:"200px",fontWeight:900}}>浏览数据</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box" style={{background:"#fc3",height:"200px",fontSize:"20px",color:"#fff",textAlign:"center",lineHeight:"200px",fontWeight:900}}>阅读数据</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box" style={{background:"#ff6666",height:"200px",fontSize:"20px",color:"#fff",textAlign:"center",lineHeight:"200px",fontWeight:900}}>下载数据</div>
                    </Col>
    
                    </Row>
                </div>
                <div className="gutter-example">
                    <Row gutter={20}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box" ref="echarts_container" style={{width:"100%",height:"400px"}}>666</div>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.echarts_container);

        // 指定图表的配置项和数据
        var option = {
            title : {
                text: '后台管理系统',
                subtext: '纯属虚构'
            },
           
            legend: {
                data:['浏览量','阅读量','下载量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'浏览量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                   
                },
                {
                    name:'阅读量',
                    type:'bar',
                    data:[6.6, 3.9, 9.0, 26.4, 28.7, 9.0, 100.6, 82.2, 8.7, 118.8, 26.0, 12.3],
                  
                },
                {
                    name:'下载量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}