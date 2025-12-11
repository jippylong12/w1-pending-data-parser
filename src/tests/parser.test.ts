
import { W1PendingParser } from '../parser.js';
import * as fs from 'fs';
import * as path from 'path';

describe('W1PendingParser', () => {
    let parser: W1PendingParser;
    const fixturesDir = path.join(__dirname, 'fixtures');

    beforeEach(() => {
        parser = new W1PendingParser();
    });

    const readFixture = (filename: string): string => {
        return fs.readFileSync(path.join(fixturesDir, filename), 'utf-8');
    };

    test('should parse Drilling Permit Pending', () => {
        const content = readFixture('dp_drilling_permit_pending.txt');
        const results = parser.parseDrillingPermit(content);
        expect(results.length).toBeGreaterThan(0);
        // Verify a specific record from the sample
        const record = results.find(r => r.UNIVERSAL_DOC_NO === '498844678');
        expect(record).toBeDefined();
        expect(record?.OPERATOR_NAME).toContain('HIGHPEAK ENERGY HOLDINGS, LLC');
    });

    test('should parse LatLongs Pending', () => {
        const content = readFixture('dp_latlongs_pending.txt');
        const results = parser.parseLatLongs(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.API_SEQUENCE_NUMBER === '22742789' && r.LOCATION_TYPE === 'BOTTOM');
        expect(record).toBeDefined();
        expect(record?.LATITUDE).toBe('32.37235504');
    });

    test('should parse Mailing Address Pending', () => {
        const content = readFixture('dp_mailing_address_pending.txt');
        const results = parser.parseMailingAddress(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.MAILING_ADDRESS_ID === '743461');
        expect(record).toBeDefined();
        expect(record?.CITY).toBe('DENVER');
    });

    test('should parse Permit Restriction Pending', () => {
        const content = readFixture('dp_permit_restriction_pending.txt');
        const results = parser.parsePermitRestriction(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.PERMIT_RESTRICTION_ID === '1640632');
        expect(record).toBeDefined();
        expect(record?.RESTRICTION_TEXT).toContain('This well must comply to the new SWR 3.13');
    });

    test('should parse Permitted Field Pending', () => {
        const content = readFixture('dp_permitted_field_pending.txt');
        const results = parser.parsePermittedField(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.UNIVERSAL_DOC_NO === '498844647');
        expect(record).toBeDefined();
        expect(record?.FIELD_ID).toBe('53613750');
    });

    test('should parse Perp Field Pending', () => {
        const content = readFixture('dp_perp_field_pending.txt');
        const results = parser.parsePerpField(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.PERP_ID === '4105991');
        expect(record).toBeDefined();
        expect(record?.SECTION_LINE1_DISTANCE).toBe('685');
    });

    test('should parse Perp Pending', () => {
        const content = readFixture('dp_perp_pending.txt');
        const results = parser.parsePerpPending(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.PERP_ID === '4106144');
        expect(record).toBeDefined();
        expect(record?.BLOCK_NUMBER).toBe('30 T1N');
    });

    test('should parse Perp Wellbore Pending', () => {
        const content = readFixture('dp_perp_wellbore_pending.txt');
        const results = parser.parsePerpWellbore(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.PERP_ID === '4106148');
        expect(record).toBeDefined();
        expect(record?.SECTION_LINE1_DIRECTION).toBe('NORTH');
    });

    test('should parse SWR Resolution Pending', () => {
        const content = readFixture('dp_swr_resolution_pending.txt');
        const results = parser.parseSwrResolution(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.SWR_RESOLUTION_ID === '463027');
        expect(record).toBeDefined();
        expect(record?.SWR_RESLTN_CODE).toBe('PUB');
    });

    test('should parse Wellbore Pending', () => {
        const content = readFixture('dp_wellbore_pending.txt');
        const results = parser.parseWellbore(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.API_SEQUENCE_NUMBER === '22742789');
        expect(record).toBeDefined();
        expect(record?.COUNTY_CODE).toBe('227');
    });

    test('should parse Wellbore Profile Pending', () => {
        const content = readFixture('dp_wellbore_profile_pending.txt');
        const results = parser.parseWellboreProfile(content);
        expect(results.length).toBeGreaterThan(0);
        const record = results.find(r => r.WELLBORE_PROFILE_ID === '1883272');
        expect(record).toBeDefined();
        expect(record?.PROFILE_CODE).toBe('HR');
    });
});
