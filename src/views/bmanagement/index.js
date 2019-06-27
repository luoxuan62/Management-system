import React from "react"
import { Card,Button,Table } from 'antd';
import {blist} from "../../api/blist"
import "./index.css"
import XLSX from "xlsx"
export default class Bmanagement extends React.Component{
  constructor(){
    super()
    this.state={
      dataSource:[],
      columns:[],
      flag:true
    }
  }
    render(){
      let {dataSource,columns,flag}=this.state
        return(
            <div>
                <Card title="商家列表" bordered={false} extra={<Button onClick={this.exportFile.bind(this)}>导出excel</Button>}>
                <Table dataSource={dataSource}
                      columns={columns}
                      rowKey={(record)=>record.id}   //行key值
                      loading={flag}   //页面加载加载效果
                      pagination={{
                        pageSize:5,
                        total:100,
                        hideOnSinglePage:true,
                        onChange:this.handleChange.bind(this)
                }}/>;
                </Card>
            </div>
        )
    }
    handleChange(page, pageSize){
        console.log(page, pageSize)
    }
    async componentDidMount(){
      let data=await blist()
      if(data){
        this.setBlist(data)   //控制flag页面加载效果     存在则false
      }
      
    }
    setBlist(data){
      let keys=Object.keys(data.data.list[0])
      let mapKeys={
        id:"id",
        name:"店铺名称",
        address:"商家地址",
        tel:"商家电话",
        logo:"商家logo"
      }
      let columns=keys.map((item)=>{
        if(item==="logo"){
          return{
            title:mapKeys[item],
            dataIndex:item,
            key:item,
            render:(text)=><img src={text}/>
          }
        }else{
          return{
            title:mapKeys[item],
            dataIndex:item,
            key:item
        }
      }
      })
      columns.push({
        title:"操作",
        key:"opration",
        render:(record)=><div>
          <Button size="small" type="primary" onClick={this.handleUpdate.bind(this,record)}>编辑</Button>
          <Button size="small" onClick={this.handleDelete.bind(this,record)}>删除</Button>
          </div>
      })
      // console.log(keys)
      // console.log(columns)
      this.setState({
        dataSource:data.data.list,
        columns,
        flag:false
      })
     
    }
    handleUpdate(record){
      console.log(record)
    }
    handleDelete(record){
      console.log(record)
    }
    //导出表格
    exportFile() {
      //数据处理
      let data=[Object.keys(this.state.dataSource[0])]
      console.log(data)
      for(var i=0;i<this.state.dataSource.length;i++){
        data.push(Object.values(this.state.dataSource[i]))
      }
      // console.log(data)
      //导出
      const ws = XLSX.utils.aoa_to_sheet(data);   //二维数组，第一个列，后面行
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
      XLSX.writeFile(wb, "sheetjs.xlsx")
    };
}