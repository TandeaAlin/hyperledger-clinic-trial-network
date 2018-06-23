
export class ResourceProvider {
    //defines the name of th research site resource => used to define relationships
    private static RESEARCH_SITE_RESOURCE = "ro.utcluj.clinictrial.organisation.ResearchSite#";
    private static TRIAL_RESOURCE = "ro.utcluj.clinictrial.trial.Trial#";
    private static CUSTOM_FORM_RESOURCE = "ro.utcluj.clinictrial.trial.CustomForm#";
    private static PATIENT_RESOURCE = "resource:ro.utcluj.clinictrial.base.Patient#";
    private static TRIAL_QUERY = "ro.utcluj.clinictrial.trial.Trial%23";
    private static CUSTOM_FORM_QUERY = "ro.utcluj.clinictrial.trial.CustomForm%23";
    private static RESOURCE_QUERY_REF = "resource%3A";

    public static  newResearchSiteResource(idResearchSite): string{
        return this.RESEARCH_SITE_RESOURCE + idResearchSite;
    }

    public static  newTrialResource(idTrial): string{
        return this.TRIAL_RESOURCE + idTrial;
    }

    public static newTrialQueryResource(idTrial):string{
        return this.RESOURCE_QUERY_REF + this.TRIAL_QUERY + idTrial;
    }

    public static newPatientResource(idPatient):string{
        return this.PATIENT_RESOURCE + idPatient;
    }

    public static newCustomFormResource(idForm):string{
        return this.CUSTOM_FORM_RESOURCE + idForm;
    }

    public static newCustomFormQueryResource(idForm):string{
        return this.RESOURCE_QUERY_REF + this.CUSTOM_FORM_QUERY + idForm;
    }
}