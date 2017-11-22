import React, { PropTypes as T, Component } from 'react'
import './style.scss'

class MyList extends Component {

  constructor(props) {
    super(props)
  }

  static defaultProps = {
    myListData:　[],
    onFilterChange: () => {},
    myListFilter: {}
  }

  render() {
    return (
      <div className="my-list">
        <button onClick={() => this.props.onFilterChange('MY_LIST')} >change myList</button>
        <button onClick={() => this.props.onFilterChange('YOUR_LIST')} >change yourList</button>
        <button onClick={() => this.props.onFilterChange('OUR_LIST')} >change ourList</button>
        <ul>
          {
            this.props.myListData.map((item, index) => {
              return <li key={`myList-${index}`}>{item.name} - {this.props.myListFilter.status}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MyList