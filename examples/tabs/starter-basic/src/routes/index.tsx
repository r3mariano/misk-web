import * as React from "react"
import { Route, Switch } from "react-router"
import { TabContainer } from "src/containers"

const routes = (
  <div>
    <Switch>
      <Route path="/_admin/starter-basic/" component={TabContainer} />
      {/* Do not include a Route without a path or it will display during on all tabs */}
    </Switch>
  </div>
)

export default routes