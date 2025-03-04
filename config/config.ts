import { defineConfig } from '@umijs/max';
import { FONTREM } from '../src/constants';
import { configGetRoutes as getRouteMap } from './route';
const routesMap = getRouteMap(process.env.UMI_APP);
const APP_ENV = (process.env.UMI_APP as keyof typeof routesMap) || 'sysOpe'; // 读取环境变量
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    // title: '@umijs/max',
  },
  mako: {
    px2rem: {
      root: FONTREM[APP_ENV],
    },
  },
  routes: routesMap[APP_ENV],
  define: {
    'process.env.UMI_APP': APP_ENV,
  },
  outputPath: `dist/${APP_ENV}`,
  npmClient: 'npm',
});
