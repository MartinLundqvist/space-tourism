# Space Tourism front end challenge

This is a submission to the [frontendmentor](https://www.frontendmentor.io/) challenge called [Space Tourism](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

The result can be viewed at [lyndencountries.netlify.app](https://lyndencountries.netlify.app/).

## Technologies used

- Typescript
- Vite.js
- React / React-Router-DOM / React-Responsive
- Styled-Components
- Netlify

## Learning goals

- Build a responsive app with centralized management of media sizes
- Learn how clamp() and minmax() work
- Manage all styles using Styled Components leveraging central theming and global styles patterns
- Use React-Router-DOM for nested routing
- Get better at Grid and Flex

## Current issues

- My implementation of top-level Grid squashes the layout comopletely on small viewport heights.
- Related to above, images get stretched on mobile devices when you change orientation
- My implementation of React-Router-DOM second level routes reduces code readability and feels clumpsy
- Image loading is slow and requires two clicks on mobile (both Safari and Chrome on iOS at least)
- First page button text has wrong color (blue, should be white)

## Next steps (in prioritized order)

1. (Fix the Home button text style). Done.
2. Fix the Grid layout issue that causes height to be squashed. Done.
3. Trouble shoot the image loading issue, and the image stretch issue. Struggling to trouble shoot this one...
4. Remove implementation of React-Router-DOM for the nested routes and refactor to a local navigation state for the page. Perhaps for later...

---

For more projects, visit my [homepage](https://martinlundqvist.se/)
