
export class ResourceProvider {
    //defines the name of th research site resource => used to define relationships
    private static RESEARCH_SITE_RESOURCE = "ro.utcluj.clinictrial.organisation.ResearchSite#";
    private static TRIAL_RESOURCE = "ro.utcluj.clinictrial.trial.Trial#";
    private static TRIAL_QUERY = "ro.utcluj.clinictrial.trial.Trial%23";
    private static RESOURCE_QUERY_REF = "resource%3A";

    public static  newResearchSiteResource(idResearchSite){
        return this.RESEARCH_SITE_RESOURCE + idResearchSite;
    }

    public static newTrialResource(idTrial){
        return this.TRIAL_RESOURCE + idTrial;
    }
}