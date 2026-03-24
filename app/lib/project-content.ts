export type ChapterSection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export const projectOverview = {
  title: 'AI Educator Hub',
  subtitle: 'A full-stack masters project on reflective and ethical AI adoption in education',
  abstract:
    'AI Educator Hub is a research-oriented web application developed to support educators in discovering artificial intelligence tools, documenting classroom-related use, reflecting on pedagogical and ethical impact, and reviewing analytics-backed summaries. The implemented artefact combines a Next.js frontend, a NestJS backend, MongoDB persistence, and Docker-based setup to provide a practical minimum viable product for academic evaluation.',
  problemStatement:
    'Many educators experiment with AI tools informally, but there are few systems that help them record how these tools are used, evaluate workload impact, and reflect on ethical implications in a structured way.',
  aim:
    'The aim of the project is to operationalize responsible AI adoption in teaching through a working platform that supports discovery, documentation, reflection, analytics, and reporting.',
}

export const projectObjectives = [
  'Provide a structured directory of AI tools relevant to educators.',
  'Capture educator AI usage in a measurable and reusable format.',
  'Support reflective and ethical evaluation of classroom AI use.',
  'Generate actionable insights and reports from recorded activity.',
]

export const projectModules = [
  {
    title: 'Authentication and profile setup',
    description:
      'Supports registration, login, user profile storage, and protected access to authenticated pages.',
  },
  {
    title: 'AI tool directory',
    description:
      'Presents curated tools with categories, use cases, pricing information, and ethical notes for informed selection.',
  },
  {
    title: 'Usage logging',
    description:
      'Captures classroom context, task type, time saved, time added, workload effect, and ethical concerns.',
  },
  {
    title: 'Guided reflection',
    description:
      'Collects post-usage ratings and narrative observations on autonomy, ethics, productivity, and future adjustments.',
  },
  {
    title: 'Dashboard and insights',
    description:
      'Transforms log data into summaries such as tool counts, recent activity, workload trends, and comparison metrics.',
  },
  {
    title: 'Reports and ethics resources',
    description:
      'Stores report snapshots and exposes reading materials and guidance on responsible AI use in education.',
  },
]

export const architectureLayers = [
  {
    title: 'Presentation layer',
    detail:
      'Next.js 16 frontend with public pages, authenticated screens, forms, route protection, and REST API consumption.',
  },
  {
    title: 'Application layer',
    detail:
      'NestJS backend organized into modules for auth, users, tools, usage logs, reflections, dashboard, insights, reports, resources, health, and seed operations.',
  },
  {
    title: 'Persistence layer',
    detail:
      'MongoDB document storage for user data, tools, logs, reflections, reports, and seeded resources.',
  },
  {
    title: 'Deployment layer',
    detail:
      'Docker Compose orchestration for the backend and database, with Swagger exposed for API inspection and testing.',
  },
]

export const schemaSummary = [
  'User: identity, authentication, institutional context, AI familiarity, and seeded admin support.',
  'Tool: name, slug, description, categories, pricing model, ethical notes, use cases, and stats.',
  'Usage Log: educator, tool, course context, task, time impact, ethical concerns, and usage date.',
  'Reflection: post-usage ratings for autonomy, ethics, productivity, plus qualitative observations.',
  'Report: generated summary metadata, report type, selected sections, and date range.',
  'Resource: ethics guidance, FAQ material, and recommended reading content.',
]

export const evaluationHighlights = [
  'The frontend compiled successfully, passed linting, and consumed the backend APIs correctly.',
  'The NestJS backend compiled successfully and exposed stable REST endpoints with Swagger documentation.',
  'Docker Compose simplified local setup by running MongoDB and the API as reproducible services.',
  'The MVP achieved the core project objectives around discovery, logging, reflection, analytics, and reporting.',
]

export const projectLimitations = [
  'Authentication remains MVP-level and should be extended with refresh tokens and stronger session handling.',
  'Report generation currently stores summaries rather than exporting PDF or DOCX files.',
  'The seeded admin path exists, but there is no dedicated administrative dashboard in the frontend.',
  'The platform does not yet include formal research study instrumentation such as consent and survey capture.',
]

export const chapter4Sections: ChapterSection[] = [
  {
    id: 'introduction',
    title: '4.1 Introduction',
    paragraphs: [
      'This chapter presents the implementation of the AI Educator Hub platform. The system was developed as a minimum viable product to support educators in the responsible adoption of artificial intelligence tools within teaching practice.',
      'The completed system consists of a Next.js frontend, a NestJS backend, a MongoDB database, and Docker-based local deployment support. Each implemented component maps directly to one or more project objectives, including tool discovery, usage tracking, reflective analysis, and evidence-based reporting.',
    ],
  },
  {
    id: 'architecture',
    title: '4.2 System Architecture',
    paragraphs: [
      'The platform follows a client-server architecture with a separated presentation layer, application service layer, persistence layer, and deployment layer.',
      'The frontend was implemented with Next.js 16 using the App Router. The backend was implemented with NestJS and divided into bounded modules to improve maintainability and clarity.',
    ],
    bullets: [
      'Frontend layer: public pages, authenticated pages, API integration, and route protection.',
      'Backend layer: auth, users, tools, usage-logs, reflections, dashboard, insights, reports, resources, health, and seed modules.',
      'Data layer: MongoDB collections for users, tools, usage logs, reflections, reports, and resources.',
      'Deployment layer: Docker Compose for API and database services, plus Swagger-backed API documentation.',
    ],
  },
  {
    id: 'technology-stack',
    title: '4.3 Technology Stack',
    paragraphs: [
      'The final implementation uses a modern TypeScript-based stack across both the frontend and backend. This reduced context switching during development and improved consistency between domain models and API contracts.',
    ],
    bullets: [
      'Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS.',
      'Backend: NestJS, TypeScript, Mongoose, JWT authentication, Swagger.',
      'Database: MongoDB.',
      'Tooling and deployment: Docker, Docker Compose, ESLint, Next.js production build pipeline.',
    ],
  },
  {
    id: 'functional-implementation',
    title: '4.4 Functional Implementation',
    paragraphs: [
      'The MVP was organized around six functional areas: authentication, tool discovery, usage logging, guided reflection, analytics, and reporting with ethics resources.',
      'Each feature was implemented as a working part of the application rather than a static mockup. The design choice was intentional so the project could support demonstration and later empirical evaluation.',
    ],
    bullets: [
      'Authentication and profiles: registration, login, protected routes, and stored educator context.',
      'AI tool directory: searchable tool listing, filtering, detail pages, and usage-log entry points.',
      'Usage logging: structured capture of course context, task type, time saved, time added, and ethical concerns.',
      'Reflection workflow: autonomy, ethics, productivity, and narrative follow-up after each logged usage event.',
      'Dashboard and insights: metrics such as total logs, tools used, hours saved, task distribution, and recent activity.',
      'Reports and resources: stored report snapshots plus built-in ethics guidance and recommended reading.',
    ],
  },
  {
    id: 'database-design',
    title: '4.5 Database Design',
    paragraphs: [
      'MongoDB was selected because the platform combines structured entities with flexible narrative content such as reflections and report summaries. Mongoose models were used to define application schemas and validation rules.',
    ],
    bullets: schemaSummary,
  },
  {
    id: 'integration',
    title: '4.6 Integration and Deployment',
    paragraphs: [
      'The frontend communicates with the backend through REST API calls. Authentication is handled with JWT-based requests from the client, while the backend protects relevant endpoints and resolves the authenticated user profile.',
      'For deployment and demonstration, Docker Compose is used to run the NestJS API and MongoDB together. Swagger was added to document the API and make backend testing easier during development and supervisor review.',
    ],
  },
  {
    id: 'summary',
    title: '4.7 Chapter Summary',
    paragraphs: [
      'The implementation demonstrates that the research concept was translated into a functioning full-stack artefact. The resulting MVP is technically coherent, modular, and suitable for demonstration, extension, and academic evaluation.',
    ],
  },
]

export const chapter5Sections: ChapterSection[] = [
  {
    id: 'introduction',
    title: '5.1 Introduction',
    paragraphs: [
      'This chapter evaluates the implemented AI Educator Hub platform and discusses how far the delivered system satisfies the aims of the project.',
      'The evaluation is primarily technical and design-oriented. It focuses on whether the artefact successfully operationalizes responsible AI adoption, reflective practice, workload measurement, and structured reporting.',
    ],
  },
  {
    id: 'objectives',
    title: '5.2 Evaluation of the Implemented System',
    paragraphs: [
      'The system satisfies the major project objectives by translating each research requirement into a concrete, working module.',
    ],
    bullets: [
      'Objective 1 achieved: a searchable AI tool directory supports informed discovery through categories, use cases, pricing, and ethical notes.',
      'Objective 2 achieved: the usage logging workflow records course context, task type, workload effect, and ethical concerns in a structured format.',
      'Objective 3 achieved: reflection forms and ethics resources support deliberate and responsible AI use rather than convenience alone.',
      'Objective 4 achieved: dashboard summaries, insights, and report snapshots convert raw activity data into interpretable outcomes.',
    ],
  },
  {
    id: 'performance',
    title: '5.3 Technical Performance Assessment',
    paragraphs: [
      'The implemented system performed successfully at the integration level across the frontend, backend, and local deployment environment.',
    ],
    bullets: evaluationHighlights,
  },
  {
    id: 'strengths',
    title: '5.4 Strengths of the System',
    paragraphs: [
      'The strongest aspect of the project is the alignment between the research problem and the implemented features. The platform does not merely present information about AI; it structures how AI use is documented and evaluated.',
    ],
    bullets: [
      'Strong alignment between research objectives and delivered functionality.',
      'Clear modularity across the frontend and backend, which supports maintainability and future extension.',
      'Ethics is embedded in tool metadata, logging, reflection, and resources rather than treated as an afterthought.',
      'Swagger, Docker, and seed workflows make the system easier to demonstrate and review academically.',
    ],
  },
  {
    id: 'limitations',
    title: '5.5 Limitations of the MVP',
    paragraphs: [
      'Although the MVP is functionally complete for demonstration, several limitations remain. These constraints were accepted to preserve focus on the core research problem and implementation schedule.',
    ],
    bullets: projectLimitations,
  },
  {
    id: 'implications',
    title: '5.6 Research Implications',
    paragraphs: [
      'The project suggests that responsible AI adoption in education can be supported through digital systems that emphasize documentation, reflection, and traceability instead of speed alone.',
      'It also shows that ethics can be embedded directly into workflows and product design rather than only described in policy documents.',
    ],
  },
  {
    id: 'recommendations',
    title: '5.7 Recommendations for Future Work',
    paragraphs: [
      'Future iterations should improve both technical robustness and research capability so the platform can move beyond MVP status.',
    ],
    bullets: [
      'Strengthen security with refresh tokens, password reset flows, and more robust session handling.',
      'Add real PDF, DOCX, and CSV exports for report generation.',
      'Introduce an administrative dashboard for curation, user management, and institution-level analytics.',
      'Add research instrumentation such as consent flows, surveys, and longitudinal comparison features.',
      'Support collaborative or community features such as peer discussion and shared case summaries.',
    ],
  },
  {
    id: 'conclusion',
    title: '5.8 Conclusion',
    paragraphs: [
      'AI Educator Hub demonstrates that a full-stack platform can combine tool discovery, usage capture, ethical reflection, analytics, and reporting within a coherent educational technology system.',
      'The implemented artefact satisfies the core project aims and provides a strong foundation for future empirical study and technical extension.',
    ],
  },
]
