import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navigation from '../navigation/navigation'
import About from '../../scenes/about/about'
import SignUp from '../signup/signup'
import SignIn from '../signin'
import PasswordForgetPage from '../passwordforget'
import ProfilePage from '../profile'
import AdminPage from '../admin'
import CompaniesPage from '../../scenes/companies/companies'
import StudentsPage from '../../scenes/students/students'
import TestBankPage from '../testbank/testBank'
import TestUploadPage from '../testupload/testUpload'
import Footer from '../footer/footer'
import SubscribeFooter from '../subscribefooter'
import ScrollToTop from '../scroll'

import * as ROUTES from '../../constants/routes'

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.ABOUT} render={(props) => <About {...props} />}/>
            <Route exact path={ROUTES.SIGN_UP} render={(props) => <SignUp {...props} />} />
            <Route exact path={ROUTES.SIGN_IN} render={(props) => <SignIn {...props} />}/>
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route exact path={ROUTES.PROFILE} render={(props) => <ProfilePage {...props} />}/>
            <Route exact path={ROUTES.ADMIN} component={AdminPage}/>
            <Route exact path={ROUTES.COMPANIES} component={CompaniesPage}/>
            <Route exact path={ROUTES.STUDENTS} component={StudentsPage}/>
            <Route exact path={ROUTES.TEST_BANK} component={TestBankPage}/>
            <Route exact path={ROUTES.TEST_UPLOAD} component ={TestUploadPage}/>
            <Redirect to={ROUTES.ABOUT}/>
          </Switch>
          <SubscribeFooter />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default Root
