import {
    DrillingPermit,
    Wellbore,
    PermitRestriction,
    SwrResolution,
    PermittedField,
    MailingAddress,
    PerpPending,
    WellboreProfile,
    PerpField,
    LatLongs,
    PerpWellbore
} from './models.js';

import {
    DRILLING_PERMIT_COLUMNS,
    WELLBORE_COLUMNS,
    PERMIT_RESTRICTION_COLUMNS,
    SWR_RESOLUTION_COLUMNS,
    PERMITTED_FIELD_COLUMNS,
    MAILING_ADDRESS_COLUMNS,
    PERP_PENDING_COLUMNS,
    WELLBORE_PROFILE_COLUMNS,
    PERP_FIELD_COLUMNS,
    LAT_LONGS_COLUMNS,
    PERP_WELLBORE_COLUMNS
} from './constants.js';

export class W1PendingParser {

    private parseFile<T>(content: string, columns: (keyof T)[]): T[] {
        const lines = content.split('\n');
        const results: T[] = [];

        for (const line of lines) {
            if (!line.trim()) continue; // Skip empty lines

            // Delimiter is '}'
            // We use split('}') but we need to be careful about the exact format.
            // Usually RRC files end with a delimiter or have them between fields.
            // Assuming standard CSV-like behavior but with '}'
            const values = line.split('}');

            const obj: any = {};
            columns.forEach((col, index) => {
                // If there are more columns than values, undefined will be assigned (or empty string)
                // We trim the values to be clean
                obj[col] = values[index] ? values[index].trim() : '';
            });

            results.push(obj as T);
        }
        return results;
    }

    public parseDrillingPermit(content: string): DrillingPermit[] {
        return this.parseFile(content, DRILLING_PERMIT_COLUMNS);
    }

    public parseWellbore(content: string): Wellbore[] {
        return this.parseFile(content, WELLBORE_COLUMNS);
    }

    public parsePermitRestriction(content: string): PermitRestriction[] {
        return this.parseFile(content, PERMIT_RESTRICTION_COLUMNS);
    }

    public parseSwrResolution(content: string): SwrResolution[] {
        return this.parseFile(content, SWR_RESOLUTION_COLUMNS);
    }

    public parsePermittedField(content: string): PermittedField[] {
        return this.parseFile(content, PERMITTED_FIELD_COLUMNS);
    }

    public parseMailingAddress(content: string): MailingAddress[] {
        return this.parseFile(content, MAILING_ADDRESS_COLUMNS);
    }

    public parsePerpPending(content: string): PerpPending[] {
        return this.parseFile(content, PERP_PENDING_COLUMNS);
    }

    public parseWellboreProfile(content: string): WellboreProfile[] {
        return this.parseFile(content, WELLBORE_PROFILE_COLUMNS);
    }

    public parsePerpField(content: string): PerpField[] {
        return this.parseFile(content, PERP_FIELD_COLUMNS);
    }

    public parseLatLongs(content: string): LatLongs[] {
        return this.parseFile(content, LAT_LONGS_COLUMNS);
    }

    public parsePerpWellbore(content: string): PerpWellbore[] {
        return this.parseFile(content, PERP_WELLBORE_COLUMNS);
    }
}
