import { W1Parser } from './index';

const parser = new W1Parser();

// Mock data content based on File 1 Schema (Drilling Permit)
// Delimiter is '}'
const mockPermitData = `N} }1001}Pending}20250101} }12000}N}N}N}Docket123} }01}20250102}N} }NEW}20241231}MyLease}1H}N}Y}N}JSMITH}N}P}20260101}WalkinName}123-456-7890} } } }APP}N} }N}N}20250101}20250101} } } } }OperatorName}123456}555-5555}01`;

const permits = parser.parseDrillingPermit(mockPermitData);

console.log('Parsed Permits:', JSON.stringify(permits, null, 2));

if (permits.length === 1 && permits[0].UNIVERSAL_DOC_NO === '1001') {
    console.log('SUCCESS: Parsed permit correctly.');
} else {
    console.error('FAILURE: Did not parse permit correctly.');
    process.exit(1);
}
