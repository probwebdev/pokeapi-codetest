# Gotta Code 'Em All!

Build a web application that uses the Pokemon API to display a list of Pokemon and their details. The application should have two pages: a list of Pokemon and a detail page for each individual Pokemon. The detail page should also display the selected Pokemon's evolutions, if any.

## Implementation overview

Project structured as a monorepo with the use of pnpm and turborepo. It's divided into three workspaces:

- apps
- packages
- tooling

`Apps` is intended for actual UI implementation like React or Angular. `Packages` are for shared components such as API calls. `Tooling` is for development tools like ESLint, testing, etc.

How to use:

- `pnpm install` to install dependencies
- `pnpm dev` to start Next.js dev server
- `pnpm build` to build production builds
- `pnpm start` will start production Next.js build
- `pnpm e2e` will open Cypress for e2e testing. In order to run cypress in CI there should be added `cypress run` command.
- `pnpm lint:js`, `pnpm lint:css`, `pnpm lint:format` will run linting commands for the whole monorepo.

## API Documentation

- [Pokemon API Documentation](https://pokeapi.co/docs/v2)
- Endpoint for Pokemon List: `https://pokeapi.co/api/v2/pokemon`
- Endpoint for Pokemon Details: `https://pokeapi.co/api/v2/pokemon/{id or name}/`
- Endpoint for Pokemon Species: `https://pokeapi.co/api/v2/pokemon-species/{id}`
- Endpoint for Pokemon Evolution Chain: You retrieve this from the species endpoint evolution_chain.url

## Technical Requirements

- Use any TypeScript framework (Angular, Vue, React, as long as it is TypeScript).

## Acceptance Criteria

- A list of 10 Pokemon should be displayed on the list page, including their names and images.
- Users should be able to navigate in the list using next and previous buttons to get 10 new Pokemon.
- Clicking on a Pokemon in the list should navigate to the detail page, which should display the Pokemon's name, image, abilities (names), and evolutions (if any).
- If the selected Pokemon has evolutions, they should be displayed as a list with their images and names. Clicking on an evolution should navigate to its detail page.
- Users should be able to navigate between the list and detail pages using the browser's back and forward buttons.
- Users should be able to bookmark (web browser) or share a link of their favorite Pokemon's details page.

## Tests

- Implement tests for bullet points 1 and 2 in the acceptance criteria.

You don't have to spend too much time on styling if you're limited on time. Just focus on building an application that will make even Pikachu proud.

## When Finished

You have been invited as an outside collaborator in this repository.
Please send the code test to us by:

- Create a new branch in this repository
- Create a pull request from that branch to the main branch
