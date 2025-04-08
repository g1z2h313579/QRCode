import _dayjs from 'dayjs';
import 'dayjs/locale/ja';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekday from 'dayjs/plugin/weekday';
import { useMemo } from 'react';
_dayjs.extend(weekday);
_dayjs.extend(localizedFormat);
_dayjs.locale('ja'); // 设置为日语
export const ENV_MOBILE = 'storeMobile';
// 運営者管理
export const ENV_SYSTEMOPERATION = 'sysOpe';
// 加盟者管理
export const ENV_FRANCHISEE = 'merchant';

export const FONTREM = {
  [ENV_MOBILE]: 12,
  [ENV_SYSTEMOPERATION]: 16,
  [ENV_FRANCHISEE]: 16,
};
export const BASEURL = {
  [ENV_MOBILE]: '/storeMobile',
  [ENV_SYSTEMOPERATION]: '/sysOpe',
  [ENV_FRANCHISEE]: '/merchant',
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
export const dayjs = _dayjs;
