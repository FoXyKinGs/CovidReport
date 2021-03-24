import { Switch, Route, Router } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Detail from '../views/Detail'
import Perhitungan from '../views/Perhitungan'
import User from '../views/Users/User'

const router = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/about" exact>
                <About/>
            </Route>
            <Route path="/about/:id">
                <Detail/>
            </Route>
            <Route path="/perhitungan" exact>
                <Perhitungan/>
            </Route>
            <Route path="/user" exact>
                <User/>
            </Route>
        </Switch>
    )
}

export default router