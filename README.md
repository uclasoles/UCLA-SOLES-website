# SOLES Website

This repository contains the source code of UCLA SOLES' website. This repository is owned by UCLA SOLES' Technical Chair email account, uclasoles.technicalchair@gmail.com.

## Development and Usage Information

Active SOLES members must consult with official SOLES web devlopment committee or Technical Chair before working on any official contributions to this repository. Pull requests will be reviewed and approved by the leader of the web development committee or another qualified individual.

### Account and Tech Stack Info

Hosting, authentication, database management, and storage are all managed through Firebase. This site was created using HTML, CSS, Javascript, React, and JQuery. Additionally, numerous npm packages are used for many features.

### Development Environment Set-Up

The following are general development environment set-up instructions:

1. `git clone git@github.com:uclasoles/UCLA-SOLES-website.git soles-site-dev`
2. `cd soles-site-dev`
2. `npm install`
3. Copy the `.env` file containing the site's Firebase credentials from the uclasoles.technicalchair@gmail.com Google Drive to the `soles-site-dev` directory. *Please see the following link if you encounter an issue copying this file from Google Drive to a Windows machine due to the '.' at the beginning of the name (Windows will automatically rename `.env` to `env`): https://www.oreilly.com/library/view/javascript-by-example/9781788293969/d34ba441-abb3-4937-acf1-a2e7d54ffb23.xhtml*.

You should now be able to locally host the SOLES website. Running 'npm start' should result in the site being displayed at http://localhost:3000. 

*Note: .env contains two sets of credentials, one for the Firebase development project and one for the Firebase production project. This is to isolate the development database entries from the production database entries.*

### Hosting the Production Version of the Site with Firebase

When you are ready to push a production build of the site, one can do so with the following commands:

1. `git clone git@github.com:/uclasoles/UCLA-SOLES-website.git soles-site`
2. `cd soles-site`
3. `npm install`
4. Copy the `.env` file containing the site's Firebase credentials from the uclasoles.technicalchair@gmail.com Google Drive to the `soles-site` directory. *Optional: Check to ensure that you can locally host the site by running 'npm start'. Additionally, see the notes in the first section about copying `.env` from the Google Drive to a Windows machine.*
5. `npm run build`
6. `firebase init`
7. Select Database, Functions, Hosting, and Storage then press <Enter>.
8. Select `soles-website` to associate this upload with the production project.
9. Accept default Database Setup.
10. Choose Javascript for Cloud Functions.
11. Accept default for using ESLint.
12. Accept default for installing dependencies with npm.
13. Enter `build` for the public directory.
14. Accept defualt, N, for single-page app.
15. Accept default, N, for NOT overwriting `build/index.html`.
16. Accept default option for Storage Rules.
17. `firebase deploy`
18. The site should now be available at https://soles-website-dev.firebaseapp.com

## Roadmap

- Refactor about page to use react bootstrap
- Revise companies field to include temporary information
- Update/add history section to the about page
- Cleanup additional images on the starting page
- Research protection of routes/querying role info in secure manner
- Migrate major querying to use HTTP Requests through Cloud Functions
- Figure out anchor/page issues with router to go between pages
- Create admin page that is authorization protected to administrators ([Role-Based User Permissions in Firebase - YouTube](https://www.youtube.com/watch?v=3qODuvp1Zp8))
- Build administrator functions for admin page (seeing users, filtering, administrative functions)
- Add features required to edit profile to the profile page
- Write content for companies pages
- Investigate methods of creating a virtual environment for npm that can be stored on GitHub
- Update GitHub information with regard to account information, technology stack, and npm packages (should just have to run command npm install)
- Add Instagram, Facebook, and Snapchat links to About page
- Add By-Laws section to the Students page

## References

The following tutorial was used to create the first version of the site:
- https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

- Copying .env from Google Drive to Windows Machine: https://www.oreilly.com/library/view/javascript-by-example/9781788293969/d34ba441-abb3-4937-acf1-a2e7d54ffb23.xhtml

- Documentation for React Bootstrap: https://react-bootstrap.github.io/layout/grid/

- Documentation for Font Awesome 5 (for icons): https://www.npmjs.com/package/@fortawesome/react-fontawesome

- Font Awesome 5: https://fontawesome.com 

