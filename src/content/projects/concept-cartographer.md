---
title: "RAG Document Q&A"
description: "A Retrieval-Augmented Generation web app that lets users query documents in natural language — with document ingestion, chunking, embedding, semantic search over a vector database, and LLM-powered answers grounded in retrieved context."
techStack: ["Python", "LangChain", "Vector DB", "LLM APIs", "RAG"]
category: "Python / AI"
order: 1
status: "In Development"
---

## Overview

Built a Retrieval-Augmented Generation pipeline that transforms uploaded documents into searchable knowledge. Users ask questions in plain language and receive answers grounded in retrieved document chunks.

## Key Technical Details

- **Ingestion pipeline**: Document upload, chunking, and embedding generation
- **Vector search**: Semantic retrieval over a vector database for relevant context
- **LLM integration**: Context-aware answer generation via LLM APIs
- **Grounded responses**: Answers constrained to retrieved document chunks to reduce hallucination
