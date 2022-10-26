# TypeScript High Performance
This is the code repository for [TypeScript High Performance](https://www.packtpub.com/application-development/typescript-high-performance?utm_source=github&utm_medium=repository&utm_campaign=9781785288647), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the book from start to finish.
## About the Book
In a world where a tiny decrease in frames per second impacts customer engagement greatly, writing highly scalable code is more of a necessity than a luxury. Using TypeScript you get type checking during development. This gives you the power to write optimized code quickly. This book is also a solid tool to those who’re curious to understand the impact of performance in production, and it is of the greatest aid to the proactive developers who like to be cognizant of and avoid the classic pitfalls while coding.


## Instructions and Navigation
All of the code is organized into folders. Each folder starts with a number followed by the application name. For example, Chapter02.



The code will look like the following:
```
export enum FeedStrategy { Recent, Popular, MediaOnly };

    export interface IFeed { ... };

    export interface IFeedGenerator { ... };

    export function FeedGeneratorFactory(feedStrategy: FeedStrategy,  
    universalKey: string): IFeedGenerator { ... }
```

The book requires the following things:

Node and NPM
TypeScript
Mocha Test Framework
Chai Assertion Library
Windows, Linux, or MacOS
 Modern browsers--Chrome, Edge, and IE
Telerik Fiddler
Frontend editor--preferably VS Code or Atom/Sublime Text

## References
Chapter 1:
* https://www.tutorialspoint.com/typescript/typescript_operators.htm

Chapter 2:
* https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
* https://www.typescriptlang.org/docs/handbook/variable-declarations.html

Chapter 3:
* https://www.typescriptlang.org/docs/handbook/functions.html
* https://www.typescriptlang.org/docs/handbook/mixins.html
* https://www.typescriptlang.org/docs/handbook/declaration-merging.html
* https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

Chapter 4:
* https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/
* https://www.youtube.com/watch?v=8aGhZQkoFbQ

Chapter 5:
* https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
* https://github.com/palantir/tslint

Chapter 6:
* https://developers.google.com/web/fundamentals/performance/critical-rendering-path/
* https://en.wikipedia.org/wiki/Content_delivery_network
* https://www.youtube.com/watch?v=YV1nKLWoARQ

Chapter 7:
* https://developers.google.com/web/tools/chrome-devtools/rendering-tools/
* http://www.telerik.com/fiddler/web-app-performance-testing
* https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

Chapter 8:
* https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html

## Related Products
* [Building Pro Web Apps with TypeScript 2.x [Video]](https://www.packtpub.com/application-development/building-pro-web-apps-typescript-2x-video?utm_source=github&utm_medium=repository&utm_campaign=9781788292054)

* [Rapid Web Application Development with TypeScript 2.x [Video]](https://www.packtpub.com/application-development/rapid-web-application-development-typescript-2x-video?utm_source=github&utm_medium=repository&utm_campaign=9781787287389)

* [Angular 2 Web Development with TypeScript [Video]](https://www.packtpub.com/web-development/angular-2-web-development-typescript-video?utm_source=github&utm_medium=repository&utm_campaign=9781785885563)
### Download a free PDF

 <i>If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost.<br>Simply click on the link to claim your free PDF.</i>
<p align="center"> <a href="https://packt.link/free-ebook/9781785288647">https://packt.link/free-ebook/9781785288647 </a> </p>