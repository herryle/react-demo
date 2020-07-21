import React, { Component } from 'react'
import TodoItem from './Todoitem'
import { Button, Input } from 'antd'
import 'antd/dist/antd.css'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <div className="content">
        <div className="box">
          <label htmlFor="insertArea">输入内容：</label>
          <Input
            id="insertArea"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            style={{ width: '300px' }}
          ></Input>
          <div className="btn">
            <Button type="primary" onClick={this.handleBtnClick}>
              提交
            </Button>
          </div>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </div>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          handleItemDelete={this.handleItemDelete}
        ></TodoItem>
      )
    })
  }
  //输入内容
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value,
    }))
  }
  // 点击
  handleBtnClick() {
    const list = this.state.list
    const inputValue = this.state.inputValue
    console.log([...this.state.list, this.state.inputValue])
    this.setState(() => ({
      list: [...list, inputValue],
      inputValue: '',
    }))
  }
  //删除
  handleItemDelete(index) {
    console.log(...this.state.list)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState(() => ({
      list: list,
    }))
  }
}

export default TodoList
