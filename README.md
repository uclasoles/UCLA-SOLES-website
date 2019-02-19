# SOLES Website

This repository contains the source code of UCLA SOLES' website. This repository is owned by UCLA SOLES' Technical Chair email account, uclasoles.technicalchair@gmail.com. The website is hosted through Firebase. The website's backend is also managed through Firebase. The Firebase account for this project is the Technical Chair email.

## Collaboration

Any active SOLES member is allowed to contribute to this repository. However, pull requests will be reviewed and approved by the SOLES Technical Chair or other qualified individual. Additionally, collaboration with official SOLES web development groups is encouraged.

### Development Environment Set-Up

General set-up instructions (not necessarily exhaustive) are as follows:

1. `git clone git@github.com:uclasoles/UCLA-SOLES-website.git soles-site-dev`
2. `cd soles-site-dev`
2. `npm install react`
3. Copy the `.env` file containing the site's Firebase credentials from the uclasoles.technicalchair@gmail.com Google Drive to the `soles-site-dev` directory.

You should now be able to locally host the SOLES website. Running 'npm start' should result in the site being displayed at http://localhost:3000. 

If you are not an official collaborator for the SOLES site, you should be making changes in a branch that can then be pull requested from. Official collaborators should make separate branches when implementing major features.

*Note: .env contains two sets of credentials, one for the Firebase development project and one for the Firebase production project. This is to isolate the development database entries from the production database entries.*

### Hosting the Production Version of the Site with Firebase

When you are ready to push a production build of the site, one can do so with the following commands:

1. `git clone git@github.com:/uclasoles/UCLA-SOLES-website.git soles-site`
2. `cd soles-site`
3. `npm install react`
4. Copy the `.env` file containing the site's Firebase credentials from the uclasoles.technicalchair@gmail.com Google Drive to the `soles-site-dev` directory.

*Optional: Check to ensure that you can locally host the site by running 'npm start'*

5. `npm run build`
6. `firebase init`
7. Select Database, Functions, Hosting, and Storage then press <Enter>.
8. Select `soles-website` to associate this upload with the production project.
9. Accept default Database Setup.
10. Choose Javascript for Cloud Functions.
11. Accept default for  

1. `cd soles-site-dev`
2. `npm run build`
3. `firebase init`
4. Check the Database, Functions, Hosting, and Storage circles and then press <Enter>.
5. Select `soles-wesbsite` or `soles-website-dev` to associate this directory with a Firebase project.
6. Press <Enter> to accept default Database Setup.
7. Choose Javascript for Cloud Functions.
8. Choose defaults for the next 2 questions.
9. Enter `build` for the public directory.
10. Choose N for single-page app.
11. Do NOT overwrite `build/index.html`.
12. Accept default option for Storage Rules.
13. `firebase deploy`
14. The site should now be available at https://soles-website-dev.firebaseapp.com


## References

The following tutorials and blog posts were used when creating this website and could be referred to for troubleshooting problems with the site:

- https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

