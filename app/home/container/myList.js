import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeMyListFilter, myListInit } from '../actions/actions'
import MyList from '../components/MyList'

class MyListContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(myListInit())
  }

  onFilterChange = (type) => {
    const { dispatch } = this.props
    console.log(type)
    dispatch(changeMyListFilter(type))
  }

  render() {
    const { myListFilter, myListData } = this.props
    return (
      <MyList
        onFilterChange={this.onFilterChange}
        myListFilter={myListFilter}
        myListData={myListData} />
    )
  }

}

MyListContainer.propTypes = {
  myListFilter: PropTypes.object,
  myListData: PropTypes.array
}

const mapStateToProps = state => {
  return {
    myListFilter: state.workBench.myList.myListFilter,
    myListData: state.workBench.myList.myListData
  }
}

export default connect(mapStateToProps)(MyListContainer)