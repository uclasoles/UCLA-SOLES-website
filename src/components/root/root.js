import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import About from '../../scenes/about/about';
import AdminPage from '../../scenes/admin/admin';
import CompaniesPage from '../../scenes/companies/companies';
import PasswordForgetPage from '../../scenes/signup/passwordForget';
import ProfilePage from '../../scenes/profile/profile';
import SignIn from '../../scenes/signin/signIn';
import SignUp from '../../scenes/signup/signUp';
import StudentsPage from '../../scenes/students/students';
import TestBankPage from '../../scenes/testbank/testBank';
import TestUploadPage from '../../scenes/testupload/testUpload';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import ScrollToTop from '../scroll/scroll';
import SubscribeFooter from '../subscribefooter/subscribefooter';

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
