export class TrialVO {

      //defines the name of th research site resource => used to define relationships
      public static RESEARCH_SITE = "ro.utcluj.clinictrial.organisation.ResearchSite#";

      public static TRIAL = "ro.utcluj.clinictrial.trial.Trial#";
      public static TRIAL_QUERY = "ro.utcluj.clinictrial.trial.Trial%23";
      public static RESOURCE_REF = "resource%3A";
      idTrial: string;
      studyName: string;
      status: string;
      researchSites: string[];
      organiser: string;
      participants: string[];
      responsibles: string[];
}