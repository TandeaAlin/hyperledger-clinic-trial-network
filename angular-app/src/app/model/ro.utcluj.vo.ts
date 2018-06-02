export class OrganisationVO {
    orgID  : string
    orgName : string
    orgInternalAddress : string
    orgType : string
    city: string;
    country: string;
    locality: string;
    region: string;
    street: string;
    postalCode: string;
}

export class FileVO{
    fileID : string
    fileContent : string
    fileType : string
    fileTimestamp : string
    fileVersion : string
    trial : string
}
export enum EntryType{
    FORM_FIELD,
    CHOICE_FIELD,
    SELECTOR_FIELD
}

export class FormVO{
    entryName : string
    entryType : number
    entryOptions : string[]
    value : string
}