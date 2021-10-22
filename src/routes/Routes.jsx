import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/pages/client/HomePage.jsx'
import Dashboard from '../components/pages/dashboard/DashLayout.jsx'
import DashProfile from '../components/pages/dashboard/DashProfile.jsx'
import DashStatistic from '../components/pages/dashboard/DashStatistic.jsx'
import LodashArray from '../lodash learn/LodashArray.jsx'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard/profile" component={DashProfile} />
      <Route exact path="/dashboard/statistics" component={DashStatistic} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/lodash" component={LodashArray} />
    </Switch>
  )
}

export default Routes
