import React, {Component} from 'react'
import {connect} from 'react-redux'

import {context} from './constants/constants'
import md5 from './util/md5'
import {login, clearFailureMessage} from './actions/_app'

class App extends Component {
  state = {
    name: '',
    pswd: ''
  }

  handleNameChange = e => {
    this.setState({name: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({pswd: e.target.value})
  }

  login = e => {
    this.props.login(this.state.name, md5(this.state.pswd))
    e.preventDefault()
  }

  componentDidUpdate() {
    if (this.props.app.loginSuccess) {
      if (location.href.indexOf('inline') != -1) {
        location.href = context + '/inline/doctor-backend'
      } else {
        location.href = context + '/doctor-backend'
      }
      return
    }
    if (this.props.app.failureMessage) {
      alert(this.props.app.failureMessage)
      this.props.clearFailureMessage()
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-container">
          <h1 className="app-name">小贝壳医生版</h1>
          <form className="login-form" autoComplete="false">
            <div className="list-group">
              <div className="list-group-item">
                <input placeholder="用户名" className="form-control" value={this.state.name} onInput={this.handleNameChange}/>
              </div>
              <div className="list-group-item">
                <input placeholder="密码" className="form-control" value={this.state.pswd} onInput={this.handlePasswordChange}
                       type="password"/>
              </div>
            </div>
            <button className="btn btn-primary btn-block" onClick={this.login} disabled={!this.state.name || !this.state.pswd}>登录</button>
          </form>
          <div>
            <p className="copyright">杭州望吉健康科技&copy;2016-2017</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {app} = state
  return {
    app
  }
}

export default connect(mapStateToProps, {login, clearFailureMessage})(App)
