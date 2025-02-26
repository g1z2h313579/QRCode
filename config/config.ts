import { defineConfig } from '@umijs/max';
import { routesMap } from './route';
const APP_ENV = (process.env.UMI_APP as keyof typeof routesMap) || 'sysOpe'; // 读取环境变量
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routesMap[APP_ENV],
  define: {
    'process.env.UMI_APP': APP_ENV,
  },
  outputPath: `dist/${APP_ENV}`,
  npmClient: 'npm',
});
