---
title: "CS Concept Cartographer"
description: "An AI-powered study tool that turns any CS topic into an interactive knowledge graph — featuring concept mapping, side-by-side comparison, quiz mode with hidden labels, and SQLite-backed learning history with per-profile search and export."
techStack: ["Python", "Streamlit", "Google Gemini", "vis.js", "SQLite"]
category: "Python / AI"
order: 1
repoUrl: "https://github.com/Rayan-Javed-Siddiqi/cs-concept-cartographer"
liveUrl: "https://rayan-javed-cs-concept-cartographer.streamlit.app/"
---

## Overview

An AI-powered study tool that transforms any computer science topic into an interactive knowledge graph. Users input a topic and get structured concept breakdowns with typed nodes (prerequisite, related, advanced, application), rendered as a navigable vis.js graph. Built with Streamlit and Google Gemini, deployed live on Streamlit Cloud.

## Key Technical Details

- **Concept mapping**: Generate interactive knowledge graphs with typed relationship nodes via Google Gemini
- **Compare mode**: View two topics side by side to discover overlapping and unique concepts
- **Quiz mode**: Hide node labels and test recall based on descriptions
- **Learning history**: SQLite-backed cache per profile with search, rename, and export capabilities
- **Annotations**: Add personal notes to any node for customised study sessions
