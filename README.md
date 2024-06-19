<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">AnyTrack</h3>

  <p align="center">
    The perfect media tracker
    <br />
    <a href="https://github.com/GerardPolloRebozado/anytrack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/GerardPolloRebozado/anytrack">View Demo</a> -->
    ·
    <a href="https://github.com/GerardPolloRebozado/anytrack/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/GerardPolloRebozado/anytrack/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project aims to be a tracker for all your media, you can check the time spend watching movies, shows and more in the future. you will also be able to check when is the next season of your favourite show comming or maybe you like some actors and you want to check out some of his others movies and more

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Nx][Nx]][Nx-url]
* [![Express][Express.js]][Express-url]
* [![Node][Node.js]][Node-url]
* [![Prisma][Prisma]][Prisma-url]
* [![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* NodeJS
* NPM
* TMDB API

### Installation

1. Get a free API Key at [TMDB](https://www.themoviedb.org/settings/api)
2. Copy the .env.example file to .env and fill it
3. run the following commands
```sh
npm install
```
```sh
docker compose up -d
```
```sh
npx prisma db push --schema apps/api/prisma/schema.prisma
```
```sh
nx run api:serve:production
```
```sh
nx run web:build
```
```sh
nx run web:start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/GerardPolloRebozado/anytrack/issues) for a full list of proposed features (and known issues).
Also you can check the [project board](https://github.com/users/GerardPolloRebozado/projects/5/views/1) for the current status of the project

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the AGPL-3.0 license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Gerard Du Pre - hello@gerarddupre.dev

Project Link: [https://github.com/GerardPolloRebozado/anytrack](https://github.com/GerardPolloRebozado/anytrack)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/GerardPolloRebozado/anytrack.svg?style=for-the-badge
[contributors-url]: https://github.com/GerardPolloRebozado/anytrack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GerardPolloRebozado/anytrack.svg?style=for-the-badge
[forks-url]: https://github.com/GerardPolloRebozado/anytrack/network/members
[stars-shield]: https://img.shields.io/github/stars/GerardPolloRebozado/anytrack.svg?style=for-the-badge
[stars-url]: https://github.com/GerardPolloRebozado/anytrack/stargazers
[issues-shield]: https://img.shields.io/github/issues/GerardPolloRebozado/anytrack.svg?style=for-the-badge
[issues-url]: https://github.com/GerardPolloRebozado/anytrack/issues
[license-shield]: https://img.shields.io/github/license/GerardPolloRebozado/anytrack.svg?style=for-the-badge
[license-url]: https://github.com/GerardPolloRebozado/anytrack/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gerard-du-pre/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://reactjs.org/
[Nx]: https://img.shields.io/badge/nx-123456?style=for-the-badge&logo=nx&logoColor=white
[Nx-url]: https://nx.dev/
[Express.js]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Prisma]: https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
