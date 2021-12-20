One way to build a Java program is using Maven

Workflow is as follows:

- choose what to build it on (ubuntu-latest)
- checkout repo
- tell what java-version to use (11)
- choose a distribution (adopt)
- Build with maven:
  example command would be: run mvn --batch-mode --update-snapshots verify
  common steps are to build staging area like:
  run: mkdir staging && cp target/\*.jar staging
  Once on the staging are it is quite commont to run some robot framework tests on the site.
  Once you have built a container, it is usually pushed to a repository for others or other systems use.

Some alternatives are using GilLab, that has built in infra for tests. linting, building and security checking your code. Or Azure pilelines, trello, confluence and circleci.

Setting up is based on many arguments;

- do you have staff / infra to build your own.
  It is faster to start using online readymade infra, but can be more costly on the long run. Do you want to restrict yourself to only one supplier?
- does your client require your build to be based on private clouds.
- is it economical to use
- cloud based might be best for common public websites with possibly massive number of contributors especially for open source productions.
