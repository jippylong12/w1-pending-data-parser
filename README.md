# w1-pending-data-parser

A TypeScript parser for the Texas Railroad Commission (RRC) Drilling Permit pending data dump. This tool is designed to ingest up to 11 specific file types from the RRC and convert them into usable structured data (classes/JSON).

## Description

The Texas RRC provides a daily dump of pending drilling permit applications. These files are provided in a fixed-width or specific format that is difficult to work with directly. This parser ingests these files, specifically the 11 files related to drilling permits, and normalizes the data for downstream applications.

## Key Features

- Parses 11 distinct RRC file types.
- Reconstructs relationships between drilling permits, wellbores, locations, and other entities.
- Typescript support with defined interfaces/types.

## Installation

```bash
npm install w1-pending-data-parser
```
*(Note: As this is a work in progress, installation instructions may vary directly from source)*

## Usage

```typescript
// Example usage (Conceptual)
import { W1PendingParser } from 'w1-pending-data-parser';

// ... feed files/data to parser ...
```

## Supported Files

1. `dp_drilling_permit_pending` (Root)
2. `dp_wellbore_pending`
3. `dp_permit_restriction_pending`
4. `dp_swr_resolution_pending`
5. `dp_permitted_field_pending`
6. `dp_mailing_address_pending`
7. `dp_perp_pending`
8. `dp_wellbore_profile_pending`
9. `dp_perp_field_pending`
10. `dp_latlongs_pending`
11. `dp_perp_wellbore_pending`
