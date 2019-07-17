# Firebase Template

Project setup

-----

# Firebase

- firebase login

Run firebase use <alias> with one of these options:

default (project-id-stage)
staging (project-id-stage)

- firebase build

- firebase deploy -P staging


# Circle Ci

To activate the play script, run: chmod 755 play

--

Circle Ci setup

- Login on Prolikes Circle Ci
- Add project
- Setup project
- Add environment variables
    - FIREBASE_TOKEN 
    
    How to: (not 100% sure about this)
    (Get firebase token by running command: firebase login:ci 
    and then: firebase deploy --token "$FIREBASE_TOKEN" )
    
    - GHTOKEN_PROLIKE

    How to:
        - Login on Prolikes Github
        - Go to Settings --> Developer Settings --> Personal Access Token
        - Geerate new token
        - Copy the token
        - Go to Circle Ci and add it to environment variables