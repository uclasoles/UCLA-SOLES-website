# SOLES@UCLA Website

![David](https://img.shields.io/david/uclasoles/UCLA-SOLES-website.svg)
![GitHub issues](https://img.shields.io/github/issues/uclasoles/UCLA-SOLES-website.svg)

This repository contains the source code of the Society of Latino Engineers @ UCLA website. The project is owned by SOLES@UCLA's Technical Chair email account, uclasoles.technicalchair@gmail.com . Currently, the lead organizer of this project is Kyle Romero, kyleromero98@gmail.com .

<img src="header.png" width="500">

## Feedback

All feedback, feature requests, or bugs should be communicated through Issues. Please see the Issues tab above.

## Installation

No installation is required to use this site. The currently hosted version of the website can be found [here](https://soles-website-dev.web.app/). Please note that the website is under construction and is not considered functional at this time.

## Quick Set-Up

Before contributing to this repository and for more detailed set-up information, please see the [Contributing](https://github.com/uclasoles/UCLA-SOLES-website/wiki/Contributing) page of our Wiki. The following is a quick set-up guide for this project:

```
> git clone git@github.com:uclasoles/UCLA-SOLES-website.git soles-site-dev
> cd soles-site-dev
> npm install
```

After running npm install, you will need to obtain a copy of our Firebase development credentials before you can host a local development version of the website. These credentials are obtainable by sending an email and name to kyleromero98@gmail.com . We may use this information to verify your identity as a SOLES member.

Once obtaining your development credentials, you will be able to host a local version of the SOLES website by running npm start. Then, the website should be viewable at http://localhost:3000 .

## Release History
- Planned: 0.1.0 (October 1st, 2019)
    - Goal: The website serves as an informational online presence for SOLES@UCLA. 
    - Feature: Students can create an account, log-in, and manage their account
    - Feature: Administrators can log-in and access some basic administrative features
    - Feature: Students are able to upload tests and view the SOLES Test Bank

## Current Organizer

Kyle Romero - [@k_rommie](https://twitter.com/k_rommie) - kyleromero98@gmail.com

[https://github.com/kyleromero98](https://github.com/kyleromero98)

Distributed under the MIT License. See `LICENSE` for more information.

# Below this line is legacy information that will be moved to the Wiki and Contributing section of the project when that is written

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

## References

The following tutorial was used to create the first version of the site:
- https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

- Copying .env from Google Drive to Windows Machine: https://www.oreilly.com/library/view/javascript-by-example/9781788293969/d34ba441-abb3-4937-acf1-a2e7d54ffb23.xhtml

- Documentation for React Bootstrap: https://react-bootstrap.github.io/layout/grid/

- Documentation for Font Awesome 5 (for icons): https://www.npmjs.com/package/@fortawesome/react-fontawesome

- Font Awesome 5: https://fontawesome.com 

