// 运行时配置

import { RunTimeLayoutConfig } from '@umijs/max';
import Header from './pages/layout/header';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 常用属性
    title: 'LOGO11',
    logo: false,
    pure: true,
    childrenRender: (dom: JSX.Element, props) => {
      return <Header {...props}>{dom}</Header>;
    },
    // layout: "top",
  };
};
