export const generateLink = <T extends { [key: string]: any }>(params: T): string => {
  const stringParams = JSON.stringify(params);

  const hash = Buffer.from(stringParams).toString('base64');
  const origin = window.location.origin;

  return `${origin}/r/${hash}`;
};

export const decodeLinkHash = <T>(hash: string): T | undefined => {
  const decoded = Buffer.from(hash, 'base64').toString();
  try {
    return JSON.parse(decoded);
  } catch (e) {
    console.error(e);
  }
};
