/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { Link } from "react-router"
//import { connect } from 'react-redux'
//import methods from '../../common/methods'
//import { Switch } from 'antd';
//import setTitle from '../../redux/actions/layout'
//import { updateLanguage } from '../../redux/actions/common'
//import loggerService from '../../common/services/logger'

class About extends React.Component{
//  constructor(props) {
//      super(props);
//
//      this.state = {
//          langKey: methods.getDefaultLanguage()
//      };
//
//      this.onChange = this.onChange.bind(this);
//  }
//
//  componentDidMount() {
//      this.props.setTitle("About");
//  }
//
//  onChange(value) {
//      loggerService.log("onChange:", value);
//
//      let langKey = value ? "en" : "zh";
//      this.props.updateLanguage(langKey);
//  }

    render() {
        return (
        	<div>关于
		        <ul>
		          <li><Link to="/about/aboutChild">aboutChild</Link></li>
		          <li><Link to="/about/aboutSecond">aboutSecond</Link></li>
		        </ul>
		        {this.props.children}        	
        	</div>
        	
//          <div>
//              <div className="language-view">
//                  <label>Language:</label>
//                  <Switch checkedChildren = 'en' unCheckedChildren = 'zh' defaultChecked ={this.props.langKey === 'en' ? true : false} onChange={this.onChange} />
//              </div>
//          </div>
        )
    }
}

//function mapStateToProps(state) {
//  let { common } = state;
//  return {
//      langKey: common.langKey
//  }
//}
//
//function mapDispatchToProps(dispatch) {
//  return {
//      setTitle: (params) => {
//          dispatch(setTitle(params));
//      },
//      updateLanguage: (langKey) => {
//          dispatch(updateLanguage(langKey));
//      }
//  }
//}
//export default connect(mapStateToProps, mapDispatchToProps)(About);
export default About;