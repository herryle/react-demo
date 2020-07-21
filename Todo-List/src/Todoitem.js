import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { item } = this.props
    console.log(this.props)
    return (
      <li>
        <span>{item}</span>
        <span
          className="icon-close"
          onClick={this.handleClick}
          style={{ cursor: 'pointer' }}
        >
          x
        </span>
      </li>
    )
  }
  handleClick() {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
}

export default TodoItem
