import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/pages/client/HomePage.jsx'
import Dashboard from '../components/pages/dashboard/DashLayout.jsx'
import DashProfile from '../components/pages/dashboard/DashProfile.jsx'
import DashStatistic from '../components/pages/dashboard/DashStatistic.jsx'
import TinymceReact from '../components/test necessary plagins/tinymceReact/TinymceReact.jsx'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard/profile" component={DashProfile} />
      <Route exact path="/dashboard/statistics" component={DashStatistic} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/tiny" component={TinymceReact} />
    </Switch>
  )
}

export default Routes
