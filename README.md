# Basic Components in Angular

This project is a hands-on activity developed to understand the fundamentals of Angular. The goal was to build from scratch an application made up of several reusable components, applying the framework's modern features and keeping a clear, maintainable and professional code structure.

The application consists of three independent features: a task list where items can be added and removed, a counter with increment, decrement and reset controls, and a user form that collects personal data and displays it in a table. All of them have been implemented as **standalone components**, using the latest tools available in Angular 17.

During development, the use of `NgModules` was avoided in favor of an architecture based on self-contained components, where each one explicitly imports its own dependencies. This gives clearer control over the dependency tree and cleaner scalability. The new `@for` structural directive was also used instead of the traditional `*ngFor`, as part of current best practices for control flow in templates.

The project structure follows a folder-based organization under `src/app/components`, where each component has its own logic, its HTML template and its SCSS styles. For styling, a **BEM (Block Element Modifier)** convention was chosen to keep visual consistency and avoid conflicts between components. In addition, minimalist and responsive design criteria were applied, taking care of spacing, alignment and visual behavior in each block.

Unit tests have been added for each component using Jasmine and Angular's testing environment. These tests validate component creation, their main logic and the correct handling of internal state. This strengthens the reliability of the code and makes future refactoring easier.

To start the project, just run the following commands:

```
npm install
ng serve
```

And to run the tests:

```
ng test
```

This project not only meets the functional requirements of the activity set in the Master's program I am taking, but also takes a thoughtful approach to how to properly structure modern Angular applications, keeping separation of concerns, code reuse, good styling practices and automated test coverage.
