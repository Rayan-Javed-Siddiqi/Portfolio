---
title: "Assembly Racing Game"
description: "A 16-bit performance engine managing direct video memory and hardware interrupts — zero OS abstractions, maximum control over rendering and input."
techStack: ["x86 Assembly", "NASM", "VGA Memory", "Hardware IRQ", "DOS/BIOS"]
category: "x86_64"
order: 6
---

## Overview

A 16-bit racing engine written entirely in x86 Assembly. Manages direct VGA video memory for rendering, hardware interrupt vectors for real-time input, and a fixed-timestep physics loop.

## Key Technical Details

- **Video memory**: Direct writes to VGA frame buffer at `0xA000:0000` for pixel-level rendering
- **Input handling**: Hardware interrupt vectors (IRQ1) for zero-latency keyboard response
- **Memory model**: Manual segment/offset addressing with custom stack frames
- **Physics loop**: Fixed-timestep update loop driven by the PIT (IRQ0)
