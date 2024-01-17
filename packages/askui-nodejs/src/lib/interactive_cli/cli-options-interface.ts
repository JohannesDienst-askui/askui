export interface CliOptions {
  operatingSystem: 'windows' | 'linux' | 'macos',
  workspaceId: string,
  accessToken: string,
  testFramework: 'jasmine' | 'jest',
  usingProxy: boolean,
  typescriptConfig: boolean,
}