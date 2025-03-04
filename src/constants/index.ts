import { useMemo } from 'react';

export const ENV_MOBILE = 'storeMobile';
export const ENV_SYSTEMOPERATION = 'sysOpe';
export const FONTREM = {
  [ENV_MOBILE]: 12,
  [ENV_SYSTEMOPERATION]: 16,
};
export const BASEURL = {
  [ENV_MOBILE]: '/storeMobile',
  [ENV_SYSTEMOPERATION]: '/sysOpe',
};
export const useEnvCode = () => {
  const envCode = useMemo<keyof typeof BASEURL>(
    () => window?.envCode as keyof typeof BASEURL,
    [window?.envCode],
  );
  return envCode;
};

export const useBaseUrl = () => {
  const envCode = useEnvCode();
  const baseUrl = useMemo<string>(() => BASEURL[envCode], [envCode]);
  return baseUrl;
};
export const getBaseUrl = (env?: keyof typeof BASEURL) => {
  return BASEURL[env!];
};
