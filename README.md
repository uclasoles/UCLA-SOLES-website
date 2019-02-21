# SOLES Website

This repository contains the source code of UCLA SOLES' website. This repository is owned by UCLA SOLES' Technical Chair email account, uclasoles.technicalchair@gmail.com.

## Development and Usage Information

Any active SOLES member is allowed to contribute to this repository. However, pull requests will be reviewed and approved by the SOLES Technical Chair or other qualified individual. Additionally, collaboration with official SOLES web development groups is encouraged.

### Account and Tech Stack Info

Hosting, authentication, database management, and storage are all managed through Firebase. This site was created using HTML, CSS, Javascript, React, and JQuery.

### Development Environment Set-Up

General set-up instructions (not necessarily exhaustive) are as follows:

1. `git clone git@github.com:uclasoles/UCLA-SOLES-website.git soles-site-dev`
2. `cd soles-site-dev`
2. `npm install react`
3. Copy the `.env` file containing the site's Firebase credentials from the uclasoles.technicalchair@gmail.com Google Drive to the `soles-site-dev` directory. *Note: Some issues were discovered when copying this file from the Google Drive to a Windows machine. Namely, the Windows OS does not allow you to name files with a '.' at the beginning and automatically renames `.env` to `env`. Please see the following link for a fix to this issue: https://www.oreilly.com/library/view/javascript-by-example/9781788293969/d34ba441-abb3-4937-acf1-a2e7d54ffb23.xhtml*.

You should now be able to locally host the SOLES website. Running 'npm start' should result in the site being displayed at http://localhost:3000. 

If you are not an official collaborator for the SOLES site, you should be making changes in a branch that can then be pull requested from. Official collaborators should make separate branches when implementing major features.

*Note: .env contains two sets of credentials, one for the Firebase development project and one for the Firebase production project. This is to isolate the development database entries from the production database entries.*

### Hosting the Development Version of the Site with Firebase
not sure why we would need to do this, so we'll figure it out if we ever need it

### Hosting the Production Version of the Site with Firebase

When you are ready to push a production build of the site, one can do so with the following commands:

1. `git clone git@github.com:/uclasoles/UCLA-SOLES-website.git soles-site`
2. `cd soles-site`
3. `npm install react`
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

- [x] Update README information to include: accounts/tech stack info, references, credential location info, setup info
- [ ] Finish Firebase authentication integration (signout, home/landing dichotomy) with navigation bar
- [ ] Finish creating Navigation component for all pages
- [ ] Host landing/homepage images on Firebase and not in webpage (Long Term: Move this to Cloudinary?)
- [ ] Develop automation script that can setup development environment or host production build, etc.
- [ ] Long Term: Move state management information to a library like Redux or MobX

## References

The following tutorials and blog posts were used when creating this website and could be referred to for troubleshooting problems with the site:

- https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

The following are links where solutions were found to problems faced in the past:

- Copying .env from Google Drive to Windows Machine: https://www.oreilly.com/library/view/javascript-by-example/9781788293969/d34ba441-abb3-4937-acf1-a2e7d54ffb23.xhtml

