import { TableColumn } from "state-management/models";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: true,
  lbBaseURL: "https://scicat.fraction.ch",
  fileserverBaseURL: "",
  synapseBaseUrl: "",
  riotBaseUrl: "",
  jupyterHubUrl: "",
  externalAuthEndpoint: "/auth/msad",
  addDatasetEnabled: false,
  archiveWorkflowEnabled: true,
  columnSelectEnabled: true,
  datasetReduceEnabled: false,
  disabledDatasetColumns: [],
  editMetadataEnabled: false,
  editSampleEnabled: true,
  editPublishedData: true,
  facility: "PSI",
  fileColorEnabled: false,
  jsonMetadataEnabled: true,
  localColumns: [
    { name: "select", order: 0, type: "standard", enabled: true },
    { name: "datasetName", order: 1, type: "standard", enabled: true },
    { name: "runNumber", order: 2, type: "standard", enabled: false },
    { name: "sourceFolder", order: 3, type: "standard", enabled: true },
    { name: "size", order: 4, type: "standard", enabled: true },
    { name: "creationTime", order: 5, type: "standard", enabled: true },
    { name: "type", order: 6, type: "standard", enabled: true },
    { name: "image", order: 7, type: "standard", enabled: false },
    { name: "metadata", order: 8, type: "standard", enabled: false },
    { name: "proposalId", order: 9, type: "standard", enabled: true },
    { name: "ownerGroup", order: 10, type: "standard", enabled: true },
    { name: "dataStatus", order: 11, type: "standard", enabled: true },
    // { name: "derivedDatasetsNum", order: 12, type: "standard", enabled: false }
  ] as TableColumn[],
  landingPage: "",
  logbookEnabled: false,
  metadataPreviewEnabled: true,
  fileDownloadEnabled: false,
  multipleDownloadEnabled: false,
  maxDirectDownloadSize: 5000000000,
  multipleDownloadAction: "",
  scienceSearchEnabled: false,
  searchProposals: true,
  searchPublicDataEnabled: true,
  searchSamples: true,
  sftpHost: "",
  shoppingCartEnabled: true,
  shoppingCartOnHeader: true,
  tableSciDataEnabled: false,
  userNamePromptEnabled: true,
  userProfileImageEnabled: true,
  ingestManual: "",
  gettingStarted: "",
  scienceSearchUnitsEnabled: false,
  jobsEnabled: true,
  policiesEnabled: true,
  editDatasetSampleEnabled: false,
  metadataStructure: "",
  loginFormEnabled: true,
  oAuth2Endpoints: [{
    displayText: "Keycloak", displayImage:
      "../../../assets/images/keycloak_icon_256px.svg", authURL:
      "auth/keycloak"
  }]
};
