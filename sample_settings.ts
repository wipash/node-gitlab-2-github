import Settings from './src/settings';

export default {
  gitlab: {
    // url: 'https://gitlab.mycompany.com',
    token: '{{gitlab private token}}',
    projectId: null,
    sessionCookie: null,
  },
  github: {
    // baseUrl: 'https://github.mycompany.com:123/etc',
    // apiUrl: 'https//api.github.mycompany.com',
    owner: '{{repository owner (user or organization)}}',
    token: '{{token}}',
    token_owner: '{{token_owner}}',
    repo: '{{repo}}',
    recreateRepo: false,
    projectNumber: null,
  },
  s3: {
    accessKeyId: '{{accessKeyId}}',
    secretAccessKey: '{{secretAccessKey}}',
    bucket: 'my-gitlab-bucket',
  },
  usermap: {
    'username.gitlab.1': 'username.github.1',
    'username.gitlab.2': 'username.github.2',
  },
  projectmap: {
    'gitlabgroup/projectname.1': 'GitHubOrg/projectname.1',
    'gitlabgroup/projectname.2': 'GitHubOrg/projectname.2',
  },
  conversion: {
    useLowerCaseLabels: true,
  },
  transfer: {
    description: true,
    milestones: true,
    labels: true,
    issues: true,
    mergeRequests: true,
    releases: true,
  },
  debug: false,
  useIssueImportAPI: true,
  usePlaceholderMilestonesForMissingMilestones: true,
  usePlaceholderIssuesForMissingIssues: true,
  useReplacementIssuesForCreationFails: true,
  useIssuesForAllMergeRequests: false,
  filterByLabel: null,
  skipMergeRequestStates: [],
  skipMatchingComments: [],
  mergeRequests: {
    logFile: './merge-requests.json',
    log: false,
  },
} as Settings;
