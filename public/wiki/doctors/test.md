# ContainerBox UI

## User Interface

### Graphical Kit

We are using **Blueprint JS** as graphical library + kit as well the
color schema: http://blueprintjs.com/

### Wireframes

The work is done in **Adobe Illustrator** and sources are located in google
drive: https://drive.google.com/drive/folders/0B55wYn4T8uxEMjdiVkhDX3MwVWs?usp=sharing

We are using **InVision App** to publish wireframes as images:
https://invis.io/62GGQEMYZ3C

Feel free to comment if you have good ideas

## Development

### Contributor code of conduct

In order to keep it cool we adopted the **Contributor Covenant**'s code of conduct
https://www.contributor-covenant.org/version/1/1/0/code-of-conduct.html

### Requirements

- NodeJS 8.x
- npm 5.7.x
- ContainerBox instance, running in background:  https://bitbucket.org/rodislav/containerbox/

### Running

- Run `npm install` then `npm start`
- A browser window will open with app running inside

### Technical choises

- ReactJS was chosen as UI library
- Creat-React app was used to generate the project
  - And it'll stay like this!
  - If a library is not compatible with it, it'll not be used
- MobX was chosen to be the _de facto_ storage system
- `fetch` is used to do the http messaging
