# Chapter 4: System Implementation

## 4.1 Introduction

This chapter presents the implementation of the AI Educator Hub platform. The system was developed as a minimum viable product to support educators in the responsible adoption of artificial intelligence tools within teaching practice. The implementation emphasizes traceability, reflective use, measurable workload impact, and ethical awareness.

The completed system consists of a Next.js frontend, a NestJS backend, a MongoDB database, and Docker-based local deployment support. The application was implemented as a modular web platform in which each component directly supports one or more research objectives. These objectives include tool discovery, usage tracking, reflective analysis, and the generation of evidence-based summaries for educators.

## 4.2 System Architecture

The platform follows a client-server architecture with a separate presentation layer, application service layer, and persistence layer.

### 4.2.1 Frontend Layer

The frontend was implemented with Next.js 16 using the App Router architecture. The frontend provides:

- public landing and onboarding screens
- authenticated dashboard views
- tool directory and tool detail pages
- usage logging and reflection forms
- analytics, reports, and resources pages

The frontend communicates with the backend through RESTful API calls. Authentication state is maintained on the client through a small shared auth context that stores the access token and resolved user profile. The frontend also includes protected route behavior so authenticated pages redirect unauthenticated users to the login page.

### 4.2.2 Backend Layer

The backend was implemented with NestJS and structured into domain-specific modules. The major modules are:

- `auth`
- `users`
- `tools`
- `usage-logs`
- `reflections`
- `dashboard`
- `insights`
- `reports`
- `resources`
- `health`
- `seed`

This modular organization improves maintainability, encourages clear boundaries, and allows individual features to evolve independently without destabilizing unrelated parts of the system.

### 4.2.3 Data Layer

MongoDB was selected as the persistence layer because the platform combines structured profile data with flexible analytical and reflective content. Documents were modeled for:

- users
- tools
- usage logs
- reflections
- reports
- resources

The use of MongoDB allows the system to store both well-defined entities and narrative content such as reflections without introducing unnecessary relational complexity for the MVP.

### 4.2.4 Deployment Layer

Docker Compose was used to simplify setup and ensure reproducibility. The backend application and MongoDB database are run as separate services. This deployment approach supports consistent local development, testing, and demonstration without requiring a complex infrastructure environment.

## 4.3 Technology Stack

The final implementation uses the following technologies:

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend

- NestJS
- TypeScript
- Mongoose
- JWT authentication
- Swagger for API documentation

### Database

- MongoDB

### DevOps and Tooling

- Docker
- Docker Compose
- ESLint
- Next.js production build pipeline

## 4.4 Functional Implementation

### 4.4.1 Authentication and User Profiles

The authentication subsystem supports account registration, login, profile retrieval, and authenticated access to protected pages. Users provide:

- name
- institutional affiliation
- department
- years of teaching experience
- professional role
- AI familiarity level
- optional goals

Passwords are hashed on the backend before storage. Authentication tokens are issued after registration and login and are then used for subsequent protected requests.

### 4.4.2 AI Tool Directory

The tool directory serves as the discovery module of the platform. Each tool record contains:

- name
- slug
- description
- categories
- pricing model
- website URL
- ethical notes
- use cases
- community-style summary metrics

The frontend consumes the tool API to support:

- listing tools
- search
- filtering by category and pricing
- viewing tool details
- starting a usage log from a selected tool

### 4.4.3 Usage Logging

The usage logging module was implemented to support structured capture of AI use in teaching. Each usage record stores:

- selected tool
- course or module
- task type
- hours saved
- hours added
- net workload effect
- workload impact classification
- selected ethical concerns
- optional notes

This logging model creates a measurable foundation for later reflection and analytics.

### 4.4.4 Reflection Workflow

After logging a usage event, the educator can complete a guided reflection. Reflection fields include:

- autonomy rating
- ethics rating
- productivity rating
- unexpected observations
- future adjustments
- additional comments

This design supports the research goal of moving AI use from convenience-driven adoption toward reflective professional practice.

### 4.4.5 Dashboard and Insights

The dashboard and insights modules aggregate individual usage data and transform it into meaningful summaries. Implemented metrics include:

- number of tools used
- total logs
- total net hours saved
- average productivity score
- recent activity feed
- hours saved over time
- most used tools
- task distribution
- workload impact distribution
- peer comparison using aggregate averages

These views allow the educator to understand patterns rather than isolated events.

### 4.4.6 Reports and Resources

The reports module generates stored summary snapshots based on user-selected parameters such as:

- report type
- date range
- included sections
- export format

The MVP stores generated summaries and metadata rather than fully rendered binary exports. This decision was taken to keep the scope aligned with the central research problem while still demonstrating the reporting pipeline.

The resources module exposes ethics guidance, recommended readings, and FAQ content from the backend. This gives the platform a built-in knowledge support component instead of making it only a tracking tool.

## 4.5 Database Design

The database schema was implemented through Mongoose models. The central entities are summarized below.

### User Schema

The user schema supports authentication, personalization, and role-aware seeding.

Key fields:

- `firstName`
- `lastName`
- `email`
- `passwordHash`
- `isAdmin`
- `institution`
- `department`
- `yearsTeaching`
- `role`
- `aiFamiliarity`
- `goals`

### Tool Schema

The tool schema represents items in the AI directory.

Key fields:

- `name`
- `slug`
- `description`
- `categories`
- `pricingModel`
- `websiteUrl`
- `ethicalNotes`
- `useCases`
- `stats`

### Usage Log Schema

The usage log schema stores each educator interaction with an AI tool.

Key fields:

- `userId`
- `toolId`
- `course`
- `task`
- `hoursSaved`
- `hoursAdded`
- `netHoursSaved`
- `workloadImpact`
- `ethicalConcerns`
- `notes`
- `usedAt`

### Reflection Schema

The reflection schema stores post-usage evaluation.

Key fields:

- `userId`
- `usageLogId`
- `autonomyRating`
- `ethicsRating`
- `productivityRating`
- `surprises`
- `futureAdjustments`
- `additionalComments`

### Report Schema

The report schema stores generated summary records.

Key fields:

- `userId`
- `title`
- `reportType`
- `startDate`
- `endDate`
- `includeSections`
- `format`
- `status`
- `summary`

## 4.6 API Design

The backend exposes REST endpoints organized by domain. The major route groups include:

- `/auth`
- `/users`
- `/tools`
- `/usage-logs`
- `/dashboard`
- `/insights`
- `/reports`
- `/resources`
- `/seed`
- `/health`

Swagger documentation was added to the backend to improve developer usability and testing. The API documentation is exposed through:

- `/api/docs`
- `/api/docs-json`

This addition supports maintainability and makes the system easier to evaluate, demonstrate, and extend.

## 4.7 Seeding and Initialization

The backend includes a seed subsystem for project initialization. Two seed behaviors are implemented:

- automatic startup seeding for tools and resources
- manual seed endpoint for admin and starter user creation

The seed endpoint is idempotent, meaning repeated execution does not duplicate seeded users or core records. It also supports a seed secret to reduce accidental misuse in shared environments.

## 4.8 Frontend-Backend Integration

The frontend integration was implemented with a lightweight API utility and shared authentication provider. The integration process included:

- storing and reusing JWT tokens
- fetching user profile data on load
- protecting authenticated routes
- replacing mock frontend datasets with live backend requests
- connecting forms directly to backend DTO-compatible payloads

The following pages were integrated with live backend data:

- login
- signup
- dashboard
- tools
- tool detail
- log usage
- my logs
- reflection
- insights
- reports
- resources

## 4.9 Testing and Verification

The implementation was verified through build and lint checks for both major application layers.

### Frontend verification

- ESLint was executed successfully
- Next.js production build completed successfully

### Backend verification

- backend dependency installation completed successfully
- NestJS production build completed successfully
- Docker Compose configuration was validated

The successful build process indicates that the integrated system is structurally complete and consistent at the code level.

## 4.10 Security and Design Considerations

Although the project is an MVP, several practical safeguards were included:

- password hashing with bcrypt
- JWT-based protected routes
- validation of request payloads with class-validator
- whitelist validation and rejection of unexpected fields
- optional seed secret for manual bootstrap operations

The design also reflects constraints appropriate to an MVP:

- local token storage was used for simplicity
- binary report export was deferred
- advanced RBAC was not implemented
- OAuth login was excluded from the initial scope

## 4.11 Summary

This chapter has presented the implementation of AI Educator Hub as a full-stack web platform. The system was built around the central research need for structured, ethical, and measurable AI adoption in education. The implementation demonstrates that a modular architecture combining Next.js, NestJS, MongoDB, and Docker can support discovery, logging, reflection, analytics, and reporting in a coherent MVP. The next chapter evaluates the results of this implementation, its limitations, and its implications for future work.
