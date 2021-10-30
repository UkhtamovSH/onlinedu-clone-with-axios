import { Route, Switch } from 'react-router-dom'
import UseRef from '../components/learn-about-react/UseRef.jsx'
import HomePage from '../components/pages/client/HomePage.jsx'
import DashCourseView from '../components/pages/dashboard/DashCourseView.jsx'
import Dashboard from '../components/pages/dashboard/DashLayout.jsx'
import DashProfile from '../components/pages/dashboard/DashProfile.jsx'
import DashStatistic from '../components/pages/dashboard/DashStatistic.jsx'
import TestRedux from '../components/test necessary plagins/TestRedux.jsx'
import TestRedux2 from '../components/test necessary plagins/TestRedux2.jsx'
import VideoJsPlayer from '../components/test necessary plagins/video-plugins/VideoJsPlayer.jsx'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard/profile" component={DashProfile} />
      <Route exact path="/dashboard/course/view/:slug" component={DashCourseView} />
      <Route exact path="/dashboard/statistics" component={DashStatistic} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/videojs" component={VideoJsPlayer} />
      <Route exact path="/useref" component={UseRef} />
      <Route exact path="/test-redux" component={TestRedux} />
      <Route exact path="/test-redux2" component={TestRedux2} />
    </Switch>
  )
}

export default Routes
