export interface DrillingPermit {
    SWR38_ABBR_NOTICE: string;
    IS_REAPPLIED: string;
    UNIVERSAL_DOC_NO: string;
    STATUS_NUMBER: string;
    EFFECTIVE_DT: string;
    RETURN_DT: string;
    TOTAL_DEPTH: string;
    IS_AMENDMENT: string;
    SWR_36_FLAG: string;
    DEVELOP_MINERALS_FLAG: string;
    CASE_DOCKET_NO: string;
    FINAL_PROTEST_DT: string;
    STATUS_SEQ_NO: string;
    SPUD_DT: string;
    EXPEDITE_FLAG: string;
    EXPEDITE_DATE_TIME: string;
    FILING_PURPOSE_CODE: string;
    SURFACE_CASING_DT: string;
    DEFAULT_LEASE_NAME: string;
    DEFAULT_WELL_NUMBER: string;
    DEFAULT_VERTICAL: string;
    DEFAULT_HORIZONTAL: string;
    DEFAULT_SIDETRACK: string;
    LOCKED_BY: string;
    DEFAULT_DIRECTIONAL: string;
    STATUS_CODE: string;
    EXPIRATION_DATE: string;
    WALKIN_CONTACT_NAME: string;
    WALKIN_CONTACT_PHONE: string;
    COMPLETION_CODE: string;
    SWR_SUBSECT_CODE: string;
    STAT_DT: string;
    CURRENT_STATE_CODE: string;
    BRIDGE_FLAG: string;
    SWR_LIST: string;
    BRIDGE_PRINT_FLAG: string;
    HAS_DISCREPANCY: string;
    SUBMIT_DATE: string;
    CREATE_DATE: string;
    UNIQUE_ADDRESS_NUMBER: string;
    DKT_SUFFIX_CODE: string;
    DKT_EXAMINER_CODE: string;
    REAPPLIED_STATUS_NO: string;
    OVERRIDE_FA_OP_CONSULT_YN: string;
    OVERRIDE_P5_DELINQUENT_YN: string;
    CASES_NO: string;
    CASES_EXCEP_APPROVAL_CODE: string;
    APPROVED_BY: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface Wellbore {
    LATLONG_TYPE_CODE: string;
    LAT_DEGREES: string;
    LAT_MINUTES: string;
    LAT_SECONDS: string;
    LONG_DEGREES: string;
    LONG_MINUTES: string;
    LONG_SECONDS: string;
    STATE_PLANE_ZONE_CODE: string;
    STATE_PLANE_X: string;
    GW1_FLAG: string;
    LAT_DEGREES_S: string;
    LAT_MINUTES_S: string;
    LAT_SECONDS_S: string;
    LONG_DEGREES_S: string;
    LONG_MINUTES_S: string;
    LONG_SECONDS_S: string;
    API_SEQUENCE_NUMBER: string;
    DIRECTIONS: string;
    MODIFIED_BY: string;
    NEAREST_TOWN_DISTANCE: string;
    NEAREST_TOWN: string;
    MODIFIED_DT: string;
    API_LINKED_FLAG: string;
    LOCATION_DESCRIPTION: string;
    COUNTY_CODE: string;
    SURFACE_LOCATION_CODE: string;
    WELLBORE_ID: string;
    OFFSHORE_COUNTY_CODE: string;
    UNIVERSAL_DOC_NO: string;
    HORIZ_WELLBORE_TYPE_CODE: string;
    STACKED_LAT_STATUS_NO: string;
    PSA_FLAG: string;
    ALLOCATION_FLAG: string;
    STACKED_LATERAL_FLAG: string;
    STATE_PLANE_Y: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface PermitRestriction {
    PERMIT_RESTRICTION_ID: string;
    RESTRICTION_CODE: string;
    UNIVERSAL_DOC_NO: string;
    RESTRICTION_TEXT: string;
    MODIFIED_BY: string;
    MODIFIED_DT: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface SwrResolution {
    UNIVERSAL_DOC_NO: string;
    SWR_RESLTN_CODE: string;
    MODIFIED_BY: string;
    MODIFIED_DT: string;
    SWR_RESOLUTION_ID: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface PermittedField {
    OFF_LEASE_PNTRN_PT_FLAG: string;
    OFF_LEASE_SURF_LOC_FLAG: string;
    REX_OLPP_OWN_OFFSET_YN: string;
    REX_OLPP_WAVIER_YN: string;
    REX_OLPP_NOTICE_YN: string;
    REX_OLPP_PUBLICATION_YN: string;
    REX_OLPP_HEARING_REQUEST_YN: string;
    REX_OLPP_LAST_NOTICE_DT: string;
    REX_OLPP_DOCKET_NO: string;
    WELL_NUMBER: string;
    UNIVERSAL_DOC_NO: string;
    FIELD_ID: string;
    WELL_TYPE_CODE: string;
    MODIFIED_BY: string;
    COMPLETION_DEPTH: string;
    MODIFIED_DT: string;
    PRIMARY_FIELD_FLAG: string;
    NEAREST_WELL_DISTANCE: string;
    NEAREST_LEASE_DISTANCE: string;
    TOTAL_ACRES: string;
    NON_CONCURRENT_37WELLS: string;
    NON_CONCURRENT_38WELLS: string;
    POOLED_UNIT_FLAG: string;
    UNITIZED_DOCKET_NO: string;
    SWR39_RESOLUTION: string;
    REPORTED_LEASE_NAME: string;
    WELL_COUNT: string;
    ENTITY_DENSITY_DOCKET_NO: string;
    FIELD_VALIDATED_DT: string;
    W1A_TRACT_DT: string;
    COMPLETION_DT: string;
    COMPLETION_WELL_CODE: string;
    PERMITTED_FIELD_ID: string;
    TEXT_FOR_85279201: string;
    REX_OLPP_HEARING_OUTCOME_CODE: string;
    HORIZ_DEPTH_SEVERANCE_LOWER: string;
    NRST_LEASE_DIST_SURF_LOC: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface MailingAddress {
    MAILING_ADDRESS_ID: string;
    ADDRESS_LINE1: string;
    ADDRESS_LINE2: string;
    CITY: string;
    COUNTRY_CODE: string;
    STATE_CODE: string;
    FOREIGN_DELIVERY_AREA: string;
    UNIVERSAL_DOC_NO: string;
    POSTAL_CODE: string;
    POSTAL_EXTENSION_CODE: string;
    MODIFIED_BY: string;
    MODIFIED_DT: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface PerpPending {
    LOCATION_TOWNSHIP: string;
    LOCATION_LOT: string;
    LOCATION_PORCION: string;
    LOCATION_SHARE: string;
    LOCATION_LEAGUE: string;
    LOCATION_LABOR: string;
    LOCATION_TRACT: string;
    PERP_ID: string;
    MODIFIED_BY: string;
    SECTION_LINE1_DISTANCE: string;
    SECTION_LINE1_DIRECTION: string;
    MODIFIED_DT: string;
    SECTION: string;
    SECTION_LINE2_DISTANCE: string;
    ABSTRACT_NUMBER: string;
    SECTION_LINE2_DIRECTION: string;
    SURVEY_NAME: string;
    LOCATION_COMMENTS: string;
    BLOCK_NUMBER: string;
    PERP_TYPE_CODE: string;
    WELLBORE_PROFILE_ID: string;
    PERMITTED_FIELD_ID: string;
    COUNTY_CODE: string;
    PERP_LOC_CODE: string;
    WELLBORE_ID: string;
    MEASURE_LINE_TYPE_CODE: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface WellboreProfile {
    PROFILE_NAME: string;
    WELLBORE_PROFILE_ID: string;
    PROFILE_CODE: string;
    MODIFIED_BY: string;
    PERMITTED_FIELD_ID: string;
    MODIFIED_DT: string;
    NRST_LEASE_DIST_BOTM_LOC: string;
    NRST_LEASE_DIST_FST_LST_TK_PT: string;
    NRST_LEASE_DIST_PRP_ANY_TK_PT: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface PerpField {
    LOCATION_TOWNSHIP: string;
    LOCATION_LOT: string;
    LOCATION_PORCION: string;
    LOCATION_SHARE: string;
    LOCATION_LEAGUE: string;
    LOCATION_LABOR: string;
    LOCATION_TRACT: string;
    PERP_ID: string;
    MODIFIED_BY: string;
    SECTION_LINE1_DISTANCE: string;
    SECTION_LINE1_DIRECTION: string;
    MODIFIED_DT: string;
    SECTION: string;
    SECTION_LINE2_DISTANCE: string;
    ABSTRACT_NUMBER: string;
    SECTION_LINE2_DIRECTION: string;
    SURVEY_NAME: string;
    LOCATION_COMMENTS: string;
    BLOCK_NUMBER: string;
    PERP_TYPE_CODE: string;
    WELLBORE_PROFILE_ID: string;
    PERMITTED_FIELD_ID: string;
    COUNTY_CODE: string;
    PERP_LOC_CODE: string;
    WELLBORE_ID: string;
    MEASURE_LINE_TYPE_CODE: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}

export interface LatLongs {
    API_SEQUENCE_NUMBER: string;
    LATITUDE: string;
    LONGITUDE: string;
    LOCATION_TYPE: string;
}

export interface PerpWellbore {
    LOCATION_TOWNSHIP: string;
    LOCATION_LOT: string;
    LOCATION_PORCION: string;
    LOCATION_SHARE: string;
    LOCATION_LEAGUE: string;
    LOCATION_LABOR: string;
    LOCATION_TRACT: string;
    PERP_ID: string;
    MODIFIED_BY: string;
    SECTION_LINE1_DISTANCE: string;
    SECTION_LINE1_DIRECTION: string;
    MODIFIED_DT: string;
    SECTION: string;
    SECTION_LINE2_DISTANCE: string;
    ABSTRACT_NUMBER: string;
    SECTION_LINE2_DIRECTION: string;
    SURVEY_NAME: string;
    LOCATION_COMMENTS: string;
    BLOCK_NUMBER: string;
    PERP_TYPE_CODE: string;
    WELLBORE_PROFILE_ID: string;
    PERMITTED_FIELD_ID: string;
    COUNTY_CODE: string;
    PERP_LOC_CODE: string;
    WELLBORE_ID: string;
    MEASURE_LINE_TYPE_CODE: string;
    OPERATOR_NAME: string;
    OPERATOR_NUMBER: string;
    OPERATOR_PHONE: string;
    DISTRICT: string;
}
