// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import './global.less';

declare global {
  interface Window {
    envCode: string;
  }
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  window.envCode = process.env.UMI_APP || '';
  return { name: '' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 常用属性
    logo: false,
    pure: true,
  };
};
