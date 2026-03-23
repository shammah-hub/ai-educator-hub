## AI Educator Hub Frontend

This repository contains the Next.js frontend application.

The NestJS + MongoDB backend has been split into a separate sibling project at:

- `/Users/appp/Documents/CODE/Masters/ai-educator-hub-backend`

If you want both apps running locally:

1. Start the backend from the backend project.
2. Start this frontend with `npm run dev`.

## Getting Started

Run the frontend development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Frontend environment

Create a `.env.local` file from [.env.example](/Users/appp/Documents/CODE/Masters/ai-educator-hub/.env.example):

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```

## Masters documentation

Dissertation-oriented drafts are available in [docs/README.md](/Users/appp/Documents/CODE/Masters/ai-educator-hub/docs/README.md).

Included chapters:

- [Chapter 4: System Implementation](/Users/appp/Documents/CODE/Masters/ai-educator-hub/docs/chapter-4-system-implementation.md)
- [Chapter 5: Evaluation and Conclusion](/Users/appp/Documents/CODE/Masters/ai-educator-hub/docs/chapter-5-evaluation-and-conclusion.md)
