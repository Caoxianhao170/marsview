/**
 * 组件配置和属性值
 */

export default {
  // 组件属性配置JSON
  attrs: [
    {
      type: 'Title',
      label: '基础配置',
      key: 'basic',
    },
    {
      type: 'TextArea',
      label: '远程地址',
      name: 'src',
    },
    {
      type: 'Input',
      label: '显示标题',
      name: 'title',
    },
  ],
  config: {
    // 组件默认属性值
    props: {
      src: 'https://juejin.cn/',
      title: 'IFrame组件',
    },
    style: {
      border: '5px solid #7d33ff',
      width: '100%',
      height: '600px',
    },
    events: [],
    api: {},
    source: '',
  },
  // 组件事件
  events: [
    {
      value: 'handleClick',
      name: '点击事件',
    },
  ],
  // 组件接口
  api: {},
};
